import React from 'react';
import Axios from 'axios';
import './App.css';
import Globalview from './components/Globalview.js'

class App extends React.Component {
  state = {
    Coords: {
      latitude: 45,
      longitude: 45
    },
    GlobalData: "",
    CountryData: "",
    InputCountry: ""
  }
  componentDidMount() {
    if(navigator){
      console.log("supported")
      navigator.geolocation.getCurrentPosition(position => {
        let pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        this.setState({Coords:pos})
      })
    }
    else{
      console.log("not supported")
    }
    Axios.get(`https://api.covid19api.com/summary`).then(res => {             
      console.log(res)
      let global = {
        TotalDeaths: res.data.Global.TotalDeaths,
        TotalConfirmed: res.data.Global.TotalConfirmed,
        TotalRecovered: res.data.Global.TotalRecovered,
      }
      this.setState({GlobalData:global})
      
    })
  }
  render(){  
    return (
      <div className="App">
        <div className="container">
          <Globalview Data = {this.state.GlobalData} />
        </div>
      </div>
    );
  }
}

export default App;

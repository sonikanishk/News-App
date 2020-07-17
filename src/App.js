// import React from 'react';
// import './App.css';
// import StateTable from './components/StateTable'
// import Charts from './components/Charts'
// import Maps from './components/Maps'
// import Axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Head from './Head'
// import Footer from './Footer'
// import Navbar from './components/Navbar';


// class App extends React.Component {
//   state = {  
//     status: {},
//     states: [],
//     withtime: [],
//     tests: []
//   }
  
//   componentDidMount() {

//     Axios.get(`https://api.covid19india.org/data.json`).then(res => { 
//       let curr_status = {
//         deaths: res.data.statewise[0].deaths,
//         confirmed: res.data.statewise[0].confirmed,
//         recovered: res.data.statewise[0].recovered,
//         time: res.data.statewise[0].lastupdatedtime,
        
//       };  
//       this.setState({ status:curr_status });

//       this.setState({states:res.data.statewise});
//       this.setState({tests:res.data.tested});
//       this.setState({withtime:res.data.cases_time_series});
      
      
//     }).catch(err => {
//       console.log("error");
//     })
//   }
  
//   render() {
//     return (
//       <div className="wrappper">
//          <Head/> 
//          <Navbar/>
//         <div className="App">
//           <Charts data = {this.state.withtime} data1 = {this.state.tests} />
//           <Maps states = {this.state.states}/>
//           <StateTable states={this.state.states}/>
//         </div>
//           <Footer/>      
//         </div>
//     );
//   }
// }
// export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Head';
import News from './components/News';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from './Footer'
import Business from './components/Business'
import Sports from './components/Sports'
import Health from './components/Health'
import Entertainment from './components/Entertainment'
import Science from './components/Science'
import Technology from './components/Technology'

export default function App(){
  return(
    <div style={{display:"flex",flexDirection:"column",minHeight:"100vh"}}>
      <div style={{flex: "1"}}>
    <Router>
    <Head/>
      <Switch>
          <Route path="/" exact component = {News} />
          <Route path="/Business" exact component = {Business} />
          <Route path="/Sports" exact component = {Sports} />
          <Route path="/Entertainment" exact component = {Entertainment} />
          <Route path="/Health" exact component = {Health} />
          <Route path="/Science" exact component = {Science} />
          <Route path="/Technology" exact component = {Technology} />
          
      </Switch>
    </Router>
    </div>
    <Footer/>
    </div> 
  );
};




        
         
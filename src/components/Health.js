import './News.css';
import HashLoader from "react-spinners/HashLoader";
import Axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Newsdata from './Newsdata';
import {Link} from 'react-router-dom'

class News extends React.Component {
    state = {
        articles: [],
        loading: true,
    }

    componentDidMount() {
        Axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=05c0f32f4c0e416f87473d04dc80ed67').then((res) => {
            this.setState({ articles: res.data.articles });
            this.setState({ loading: false })
        });
    }
    render() {
        return (
        <div>
           
            <div className="Wrappp">
    
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <HashLoader size={30} color={"#84EDB4"} loading={this.state.loading} />
                </div>
                <div>
                    {this.state.loading ? <div style={{ display: "flex", justifyContent: "center", fontFamily: "'Cinzel', serif" }}><p> Loading... </p></div> : ""}
                </div>
                <div class="heading">
                    <h2> TOP HEADLINES IN HEALTH </h2>
                </div>
            
                <div className="sub-categories">
                    <Link to="/" className="content">home</Link>
                    <Link to="/Business" className=" content" >business</Link>
                    <Link to="/Entertainment" className=" content" >entertainment</Link>
                    <Link to="/Health" className=" content" >health</Link>
                    <Link to="/Science" className=" content" >science</Link>
                    <Link to="/Sports" className=" content" >sports</Link>
                    <Link to="/Technology" className=" content" >technology</Link>
                </div>

                <div className="News-data">
                    <Newsdata data={this.state.articles}/>
                </div>
                
            </div>
            </div>
        );
    }
}
export default News;




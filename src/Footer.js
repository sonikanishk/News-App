import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return(
            <div className="copyright">
                <span> Copyright © 2020 Kanishk Soni </span> 
                <a href="https://github.com/sonikanishk/COVID-19-Tracker-India"><br></br><i class="social-icon fab fa-github fa-lg" aria-hidden="true"></i></a>
            </div>
        );
    };
};
export default Footer;


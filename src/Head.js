import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Head.css';
class Head extends React.Component {
    render(){
        return(
            <div className = "wrapper" >
               <div class="headdd" style={{position: "fixed",width:"100%"}}> 
                    <h2>
                        <b>NEWS APP</b>
                        
                    </h2>
                </div>               
            </div>
            
        );
    };
};
export default Head;


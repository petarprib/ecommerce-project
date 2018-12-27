import React from "react"
import { NavLink } from 'react-router-dom'

export default class Footer extends React.Component{
    
    render(){
        let activeStyle = {
            color: "#708090"
        }
        return(
            <div className="footer">
                <div></div>
                <div>
                    <div className="connect">
                        <h2>Connect</h2>
                    </div>    
                    <div className="socialmedia">
                        <li><NavLink to="#" activeStyle ={activeStyle}><i className="fab fa-twitter-square"></i></NavLink></li>
                        <li><NavLink to="#" activeStyle ={activeStyle}><i className="fab fa-facebook-square"></i></NavLink></li>
                        <li><NavLink to="#" activeStyle ={activeStyle}><i className="fab fa-youtube-square"></i></NavLink></li>
                    </div>
                </div>
                <div className = "footeroptions">
                    <li><NavLink to="#" activeStyle ={activeStyle}>FAQ</NavLink></li>
                    <li><NavLink to="#" activeStyle ={activeStyle}>Terms & conditions</NavLink></li>
                    <li><NavLink to="#" activeStyle ={activeStyle}>Return policy</NavLink></li>
                </div>
            </div>
        )
    }
}
import React from "react"
import { NavLink } from 'react-router-dom'

export default class Navbar extends React.Component{

    render(){
        let activeStyle = {
            color: "#708090"
        }

        if(Meteor.userId() == null){
            return(
                <div className="navbar">               
                    <div>
                        <NavLink className="logo" to="/">ROGUE</NavLink>
                    </div>
                    <ul className = "menu">
                        <li><NavLink to="/Products" activeStyle ={activeStyle}>Products</NavLink></li>
                        <li><NavLink to="/About" activeStyle ={activeStyle}>About</NavLink></li>
                        <li><NavLink to="/Contact" activeStyle ={activeStyle}>Contact</NavLink></li>
                        <li><NavLink to="/Cart" activeStyle ={activeStyle}><i className="fas fa-shopping-cart"></i></NavLink></li>
                    </ul>
                </div>
            )
        }else if(Meteor.userId){
            return(
                <div className="navbar">               
                    <div>
                        <NavLink className="logo" to="/">ROGUE</NavLink>
                    </div>
                    <ul className = "menu">
                        <li><NavLink to="/Products" activeStyle ={activeStyle}>Products</NavLink></li>
                        <li><NavLink to="/About" activeStyle ={activeStyle}>About</NavLink></li>
                        <li><NavLink to="/Contact" activeStyle ={activeStyle}>Contact</NavLink></li>
                        <div className = "cartandlogout">
                            <li><NavLink to="/Cart" activeStyle ={activeStyle}><i className="fas fa-shopping-cart"></i></NavLink></li>
                            <li><NavLink to="/LogOut" activeStyle ={activeStyle}><i className = "fas fa-sign-out-alt"></i></NavLink></li>
                        </div>
                    </ul>
                </div>
            )
        }else if(LogOut){
            return(
                null
            )
        }
    }
}
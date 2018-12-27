import React from "react"
import { NavLink } from 'react-router-dom'

export default class Homepage extends React.Component{
    render(){
        return(
            <div className = "homepage">
                <div className = "cover">
                    <h1>We help the strong become stronger</h1>
                    <NavLink to = "/Products"><button>Shop now</button></NavLink>
                </div>
            </div>
        )
    }
}
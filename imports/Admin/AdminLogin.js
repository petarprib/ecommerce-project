import React from "react"
import { NavLink } from 'react-router-dom'

export default class AdminLogin extends React.Component{

    state = {
        email:"", password:""
    }

    /* componentDidMount(){
        //function to create a user
        Meteor.call("createUserInServer", "petar@barcelonacodeschool.com", "1234", (err, data) =>{
            
        })
    } */

    handleChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    redirectLogin = e => {
        this.props.history.push("/AdminPanel")
    }

    handleClick = e =>{
        var email = this.state.email
        Meteor.loginWithPassword({email},this.state.password,(err, data) =>{
            if(err){
                alert("Incorrect data provided, please try again")
            }else{
                this.redirectLogin()
            }
        })
    }

    render(){
        return(
            <div 
                onChange    = {this.handleChange}
                className   = "adminloginpage">
                <div className = "adminloginsquare">
                    <div className = "admindetails">
                        <label>Username</label>
                        <input
                            className   = "admininputs"
                            type        = "text"
                            name        = "email"
                        />
                    </div>
                    <div className = "admindetails">
                        <label>Password</label>
                        <input
                            className   = "admininputs"
                            type        = "password"
                            name        = "password"
                    />
                    </div>
                    <div>
                        <button
                            onClick     = {this.handleClick}
                            className   = "adminbutton">Log in</button>
                    </div>
                </div>
            </div>
        )
    }
}
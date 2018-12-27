import React from "react"

export default class LogOut extends React.Component{
    
    componentDidMount(){
        Meteor.logout()
        setTimeout(()=>{
            this.props.history.push("/")
        },50)

    }

    render(){
        return(
            null
        )
    }
}
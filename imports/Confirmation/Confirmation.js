import React from "react"

export default class Confirmation extends React.Component{
    render(){
        return(
            <div className = "confirmationpage">
                <div className = "confirmationptags">
                    <p className = "p1">Thank you for your order</p>
                    <p className = "p2">You will receive an email shortly to the provided email address</p>
                </div>
            </div>
        )
    }
}
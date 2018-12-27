import React from "react"
import { NavLink } from 'react-router-dom'
import { Cart_api } from "../api/localstorage"

export default class CartItem extends React.Component{
    
    handleClick = e =>{
        Cart_api.remove({_id:this.props.article._id}, (err, data) =>{
        })
    }
    
    render(){
        return(
            <div className = "cartitem">
                <div className = "cartimg">
                    <img src = {this.props.article.url}/>
                </div>
                <div>
                    <p>{this.props.article.name}</p>
                </div>
                <div>
                    <p className = "priceandremove">{this.props.article.price}€</p>
                </div>
                <div className = "priceandremove cartremovebutton">
                    <i
                        onClick     = {this.handleClick}
                        className   = "far fa-trash-alt">
                    </i>
                </div>
            </div>
        )
    }
}
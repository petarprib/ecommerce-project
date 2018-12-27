import React from "react"
import CartItem from "./CartItem"

export default class CartList extends React.Component{
    render(){
        return(
            <ul className = "li">
                {this.props.cartProducts.map((ele, i, cartProducts) => {
                    return <li key = {i}>
                        <CartItem article = {ele}/>
                        <hr/>
                    </li>
                })}
            </ul>
        )
    }
}
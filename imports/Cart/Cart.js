import React from "react"
import CartList from "./CartList"
import { NavLink } from 'react-router-dom'
import { Cart_api } from "../api/localstorage"

export default class Cart extends React.Component{
    
    state = {
        cartProducts: [
            
        ],
        total:0
    }

    componentDidMount(){
        Tracker.autorun(() =>{
            var cartProducts = Cart_api.find({}).fetch()
            this.setState({cartProducts}, () =>{
                this.sumTotal()
            })            
        })
    }

    sumTotal = () =>{
        var total = this.state.total
        this.state.cartProducts.map((ele) =>{
            total += Number(ele.price)
        })
        return this.setState({total})
    }

    render(){
        return(
            <div>
                <div className = "cartcategories">
                        <p className = "cartarticle">Article</p>
                        <p className = "priceandremove">Price</p>
                        <p className = "priceandremove">Remove</p>
                </div>
                <hr className = "carthr"/>
                <div className = "cartlist">
                    <CartList cartProducts = {this.state.cartProducts}/>
                </div>
                <div className = "total">
                    <div>
                    </div>
                    <div>
                        <p className = "ordertotal">Order total:</p>
                    </div>
                    <div className = "cartprices">
                        <p className = "ordertotal">{this.state.total}€</p>
                    </div>
                    <div>
                    </div>
                </div>
                <hr />
                <div className = "cartshoppingcheckout">
                    <div>
                    </div>
                    <div>
                        <NavLink to = "/Products"><button id = "cartshoppingbutton" className = "cartbuttons">Continue shopping</button></NavLink>
                    </div>
                    <div>
                        <NavLink to = "/Checkout"><button id = "cartcheckoutbutton" className = "cartbuttons">Go to checkout</button></NavLink>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}
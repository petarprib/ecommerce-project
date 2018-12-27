import React from "react"
import Cart from "../Cart/Cart"
import { NavLink } from 'react-router-dom'
import { Products_api } from "../../api/products"
import { Cart_api } from "../api/localstorage"

export default class Product extends React.Component{
    
    state = {
        product:[

        ]
    }
    
    componentDidMount(){
        Tracker.autorun(() =>{
            var product = Products_api.findOne({_id:this.props.match.params.id})
            this.setState({product})            
        })
    }

    handleClick = e =>{
        Cart_api.insert(this.state.product)
    }

    render(){ 
        if (this.state.product){
            return(
                <div>
                    <div className = "onearticle">
                        <div>
                            <img className = "onearticleimg" src={this.state.product.url}/>
                        </div>
                        <div className = "onearticledescription">
                            {this.state.product.description}
                        </div>
                        <div className = "onearticledetails">
                            <div>
                                <div>
                                    <div className = "onearticlename">
                                        {this.state.product.name}
                                    </div>
                                    <div className = "oneprice">
                                        <p>{this.state.product.price}€</p>
                                    </div>
                                    <p className = "vat">incl. VAT</p>
                                </div>
                                <div>
                                    <button
                                        className   = "onebutton"
                                        onClick     = {this.handleClick}
                                    >Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                null
            )
        }
    }
}
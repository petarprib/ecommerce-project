import React from "react"
import ProductsList from "./ProductsList"
import { Products_api } from "../../api/products"

export default class Products extends React.Component{

    state = {
        products:[
            
        ]
    }

    componentDidMount(){
        Tracker.autorun(() =>{
            var products = Products_api.find({}).fetch()
            
            this.setState({products})
        })
    }

    render(){
        return(
            <div>
                <h1 className = "title">Our products</h1>
                <ProductsList products = {this.state.products}/>
            </div>
        )
    }
}
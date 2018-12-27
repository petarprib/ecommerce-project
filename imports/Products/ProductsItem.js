import React from "react"
import { NavLink } from 'react-router-dom'

export default class ProductItem extends React.Component{
    render(){
        return(
            <div className = "li">
                <NavLink to={`/Product/${this.props.article._id}`}><img className = "articleimg" src={this.props.article.url}/></NavLink>
                <div className = "articlename">
                    <NavLink to={`/Product/${this.props.article._id}`}>{this.props.article.name}</NavLink>
                </div>
                <div className = "price">
                    <p>{this.props.article.price}€</p>
                </div>
            </div>
        )
    }
}
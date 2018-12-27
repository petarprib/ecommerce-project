import React from "react"
import ProductsItem from "./ProductsItem"

export default class ProductsList extends React.Component{
    render(){
        return(
            <ul className = "article li">
                {this.props.products.map((ele, i) => {
                    return <li key = {i}>
                        <ProductsItem
                            article = {ele}
                        />
                    </li>
                })}
            </ul>
        )
    }
}
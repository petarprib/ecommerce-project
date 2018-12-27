import React from "react"
import ImageUpload from "../ImageUpload"
import { NavLink } from 'react-router-dom'

export default class AdminPanel extends React.Component{

    state = {
        todos: [], name: "", price: "", description: "", public_id: "", url: ""
    }

    handleChange = e => {
        this.setState({name:e.target.value})
    }

    handleChange2 = e => {
        this.setState({price:e.target.value})
    }

    handleChange3 = e => {
        this.setState({description:e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        Meteor.call("addProduct", {name:this.state.name, price:this.state.price, description:this.state.description, public_id:this.state.public_id, url:this.state.url}, (err, data) => {
            if(err){
                alert("Error adding product, please try again")
            }else{
                alert("Product successfully added")
            }
        })
        this.setState({name:"", price:"", description:""})
    }

    uploadImage = (public_id, url) => {
        this.setState({public_id:public_id, url:url})
    }

    render(){
        return(
            <div
                className   = "addproductpage">
                <div>
                    <p className = "addproduct">Add product</p>
                </div>
                <div className = "addproducttop">
                    <div>
                        <label>Name</label>
                        <input
                            onChange    = {this.handleChange}
                            className   = "admininputs"
                            type        = "text"
                            value       = {this.state.name}
                            required
                        />
                    </div>
                    <div>
                        <label>Price</label>
                        <input
                            onChange    = {this.handleChange2}
                            className   = "admininputs"
                            type        = "text"
                            placeholder = "Example: 500.00"
                            value       = {this.state.price}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        onChange    = {this.handleChange3}
                        value       = {this.state.description}
                        required
                    />
                </div>
                <div className = "addimagetop">
                    <div>
                        <ImageUpload uploadImage = {this.uploadImage}/>
                    </div>
                    <div>
                        <button
                            onClick     = {this.handleSubmit}
                            className   = "adminsubmit"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
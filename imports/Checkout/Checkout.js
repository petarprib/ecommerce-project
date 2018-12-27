import React from "react"
import { Cart_api } from "../api/localstorage"
import Payment from "../Payment/Payment"

export default class Checkout extends React.Component{

    state = {
        yourTotal: [
            
        ],
        total:0,
        email:""
    }

    componentDidMount(){
        debugger
        Tracker.autorun(() =>{
            var yourTotal = Cart_api.find({}).fetch()
            this.setState({yourTotal}, () =>{
                debugger
                this.sumTotal()
                debugger
            })            
        })
    }

    sumTotal = () =>{
        var total = this.state.total
        this.state.yourTotal.map((ele) =>{
            total += Number(ele.price)
        })
        debugger
        return this.setState({total})
    }

    handleChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    render(){
        return(
            <div className = "checkoutpage">
                <div>
                    <div className = "checkoutgrids">
                        < div>
                            <label>First Name<span className = "requiredstars">*</span></label>
                            <input
                                className = "contactdetails"
                                type = "text"
                                required
                            />
                        </div>
                        <div>
                            <label>Last Name<span className = "requiredstars">*</span></label>
                            <input
                                className = "contactdetails"
                                type = "text"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label>Address<span className = "requiredstars">*</span></label>
                        <input
                            className = "contactdetails"
                            type = "text"
                            required
                        />
                    </div>

                    <div>
                        <input
                            className = "contactdetails"
                            type = "text"
                            placeholder = "Apartment, suite, unit etc. (optional)"
                        />
                    </div>

                    <div>
                        <label>Town/City<span className = "requiredstars">*</span></label>
                        <input
                            className = "contactdetails"
                            type = "text"
                            required
                        />
                    </div>

                    <div className = "checkoutgrids">
                        <div>
                            <label>Postcode<span className = "requiredstars">*</span></label>
                            <input
                                className = "contactdetails"
                                type = "text"
                                required
                            />
                        </div>
                        <div>
                        </div>
                    </div>

                    <div className = "checkoutgrids">
                        <div>
                            <label>Email<span className = "requiredstars">*</span></label>
                            <input
                                className   = "contactdetails"
                                type        = "email"
                                name        = "email"
                                onChange    = {this.handleChange}
                                value       = {this.state.email}
                                required
                            />
                        </div>
                        <div>
                            <label>Phone Number<span className = "requiredstars">*</span></label>
                            <input
                                className = "contactdetails"
                                type = "text"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label>Notes</label>
                        <textarea/>
                    </div>

                </div>

                <div>
                    <div className = "checkoutsummary">
                        <div className = "yourorder">
                            <p>Your order</p>
                        </div>
                        <div className = "checkouttotal">
                            <div>
                                <p className = "checkouttotalbold">Total</p>
                            </div>
                            <div className = "cartprices">
                                <p className = "checkouttotalbold">{this.state.total}€</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Payment
                            orderTotal  = {this.state.total}
                            email       = {this.state.email}
                            history     = {this.props.history}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react'
import config  from '../../secret'
import StripeCheckout from 'react-stripe-checkout';

export default class Payment extends React.Component{

    onToken = (token) => {
        var that = this
        Meteor.call('StripeChargeMethod', token, this.props.orderTotal * 100, (err,data)=>{
                if(err){
                    alert('something went wrong ...')
                }else if(data){
                    if(data.status == "succeeded"){
                        that.props.history.push("/Confirmation")
                }else if(data.type =='StripeInvalidRequestError'){
                    alert('hmmm ... StripeInvalidRequestError')
                }
                }
        })
    }

    //if you want to style the button, look for the class name of it in the console

    render() {
        return(
            <div>
                <StripeCheckout
                    token       = {this.onToken}
                    stripeKey   = {config.publishable_key}
                    amount      = {this.props.orderTotal * 100}
                    email       = {this.props.email}
                    currency    = "EUR"
                />
            </div>
        )
    }
}
import  { Meteor }  from "meteor/meteor"
import config from "../../secret"
var Stripe = StripeAPI(config.secret_key);

var charge = (token, amount)=>{
    var myCharge = Stripe.charges.create({
    source: token.id,
    amount: amount,
    currency: 'EUR',
    receipt_email: "petar@barcelonacodeschool.com",
    })
    return myCharge
}

Meteor.methods({
    StripeChargeMethod: function(token, amount){
        try{
            var data = charge(token, amount)
            console.log('***********************success***********************?')
            return data
        }catch(error){
            console.log('***********************error***********************?')
            return error
        }
    }
})

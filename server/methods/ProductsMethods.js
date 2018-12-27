import { Meteor }  from "meteor/meteor"
import { Products_api } from "../../api/products"

Meteor.methods({
    "addProduct": function(obj){
        console.log("addProduct function called!", obj)
        var productInserted = Products_api.insert(obj)
        return productInserted
    }
})
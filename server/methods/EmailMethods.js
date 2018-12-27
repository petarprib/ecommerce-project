import { Meteor } from "meteor/meteor"
import { Email } from "meteor/email"

Meteor.methods({
    'send_email':function(arg){
        console.log('email sent', arg)
        Email.send({ 
            to:arg.receiver, 
            from:arg.sender,
            name:arg.name,
            subject:arg.subject,
            html: `<div>Sender : ${arg.sender}</div> <div>Name : ${arg.name} </div> <div>${arg.comment}</div>`
        })
    }
})
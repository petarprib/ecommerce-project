import { Meteor } from 'meteor/meteor'
import "./methods/ProductsMethods"
import "./methods/AdminMethods"
import "./methods/EmailMethods"
import "./methods/PaymentMethods"
import { URL }  from './URL_Mailer'

Cloudinary.config({
  cloud_name: "dluulezqo",
  api_key: "668895899548453",
  api_secret: "Y4UEI_uki5xZ1dEIGX0phkaDzxM"
})

Accounts.config({
  forbidClientAccountCreation: true
});

Meteor.startup(function () {
  process.env.MAIL_URL=URL
});
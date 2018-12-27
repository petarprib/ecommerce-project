import React from "react"

export default class Contact extends React.Component{

    state = {
        name: "",
        email: "",
        subject: "",
        comment: ""
    }

    handleChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    sendEmail = (email) =>{
        Meteor.call("send_email", email, (err, data) =>{            
            if (err){
                alert("Error sending email, please try again")
            }else{
                alert("Your email has been received, we will get back to you as soon as possible")
            }
            this.setState({
                name : '',
                email : '',
                subject :'',
                comment :''
            })
        })
    }

    handleClick = e =>{
        e.preventDefault()
        let email = {
            sender:this.state.email,
            receiver:"petar@barcelonacodeschool.com",
            name:this.state.name,
            subject:this.state.subject,
            comment:this.state.comment
        }
        this.sendEmail(email)
    }

    render(){
        return(
            <div>
                <div>
                    <h1 className = "title">Contact us</h1>
                </div>
                <div 
                    className = "contactpage"
                    onChange = {this.handleChange}
                >
                    <div> 
                        <form className = "contactform">
                            <div>
                                <label>Name<span className = "requiredstars">*</span></label>
                                <input
                                    className   = "contactdetails"
                                    type        = "text"
                                    name        = "name"
                                    value       = {this.state.name}
                                    required

                                />
                            </div>
                            <div>
                                <label>Email<span className = "requiredstars">*</span></label>
                                <input
                                    className   = "contactdetails"
                                    type        = "email"
                                    name        = "email"
                                    value       = {this.state.email}
                                    required
                                />
                            </div>
                            <div>
                                <label>Subject<span className = "requiredstars">*</span></label>
                                <input
                                    className   = "contactdetails"
                                    type        = "text"
                                    name        = "subject"
                                    value       = {this.state.subject}
                                    required
                                />
                            </div>
                            <div>
                                <label>Comment<span className = "requiredstars">*</span></label>
                                <textarea 
                                    name    = "comment"
                                    value   = {this.state.comment}
                                    required
                                />

                                <button
                                    onClick     = {this.handleClick}
                                    className   = "contactsubmit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d925424.440290043!2d-83.6647260607519!3d39.97718250091391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388ef561620cb7%3A0x3251fcb3c752b49a!2sRogue+Fitness!5e0!3m2!1sen!2ses!4v1530614871845" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
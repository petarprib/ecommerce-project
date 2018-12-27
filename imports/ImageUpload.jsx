import React from "react"

export default class ImageUpload extends React.Component{
    uploadWidget = () => {
        var self = this
        cloudinary.openUploadWidget({
            cloud_name: "dluulezqo",
            upload_preset: "ldf8fjk5",
            tags:["products"]
        },
        function(error, result) {
            if(error){
                alert("Error uploading the image, please try again")
            }else{
                self.props.uploadImage(result[0].public_id, result[0].url)
                alert("Image successfully uploaded")
            }
        });
    }

        render(){
                return (
                    <div>
                        <div>
                            <button
                                onClick     = {this.uploadWidget}
                                className   = "uploadbutton"
                            >
                                Upload Image
                            </button>
                        </div>
                    </div>
                )
        }
}
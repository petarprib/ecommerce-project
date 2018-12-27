import React from "react"

export default class About extends React.Component{
    render(){
        return(
            <div>
                <h1 className = "title">About us</h1>
                <div>
                    <div className = "hq">
                        <div>
                            <img className = "hqimg" src="https://res.cloudinary.com/dluulezqo/image/upload/v1530545275/Webapp/hq.jpg"></img>
                        </div>
                        <div className = "lorem">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in placerat magna. Phasellus et faucibus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Nulla lorem arcu, sagittis et quam sed, porta malesuada tellus. Nunc eleifend ultricies quam, nec fringilla mi maximus id. Duis sollicitudin lacus blandit, aliquet libero vel, iaculis dolor. Fusce a rhoncus ex. Vivamus eu tempor orci. Praesent auctor lorem et est fermentum, pellentesque fringilla velit placerat. Maecenas convallis erat eget diam eleifend, in eleifend tortor pulvinar. Sed pretium purus ut risus rutrum congue. Sed venenatis non est in tristique. Mauris euismod eu erat sit amet dapibus. Pellentesque eleifend, orci a semper malesuada, quam ex lobortis odio, id dignissim est metus sit amet nulla. Nam varius sagittis aliquet. Proin efficitur justo nibh. In eu elit nibh. Mauris maximus turpis mollis semper tristique. Aliquam commodo lacinia velit at tempus. Donec facilisis odio dui. Aenean posuere ante ac ipsum tempor, quis eleifend augue vestibulum. Donec velit ex, interdum eget mattis in, viverra ac turpis.</p>
                        </div>
                    </div>
                    <div className = "warehouse">
                        <div className = "lorem">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in placerat magna. Phasellus et faucibus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Nulla lorem arcu, sagittis et quam sed, porta malesuada tellus. Nunc eleifend ultricies quam, nec fringilla mi maximus id. Duis sollicitudin lacus blandit, aliquet libero vel, iaculis dolor. Fusce a rhoncus ex. Vivamus eu tempor orci. Praesent auctor lorem et est fermentum, pellentesque fringilla velit placerat. Maecenas convallis erat eget diam eleifend, in eleifend tortor pulvinar. Sed pretium purus ut risus rutrum congue. Sed venenatis non est in tristique. Mauris euismod eu erat sit amet dapibus. Pellentesque eleifend, orci a semper malesuada, quam ex lobortis odio, id dignissim est metus sit amet nulla. Nam varius sagittis aliquet. Proin efficitur justo nibh. In eu elit nibh. Mauris maximus turpis mollis semper tristique. Aliquam commodo lacinia velit at tempus. Donec facilisis odio dui. Aenean posuere ante ac ipsum tempor, quis eleifend augue vestibulum. Donec velit ex, interdum eget mattis in, viverra ac turpis.</p>
                        </div>
                        <div>
                            <img className = "warehouseimg" src="https://res.cloudinary.com/dluulezqo/image/upload/v1530545275/Webapp/warehouse.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
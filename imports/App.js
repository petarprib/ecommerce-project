import React from "react"
import { Todos } from "../api/products"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import LogOut from "./LogOut"
import Homepage from "./Homepage/Homepage"
import Products from "./Products/Products"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Product from "./Products/Product"
import Cart from "./Cart/Cart"
import Checkout from "./Checkout/Checkout"
import Confirmation from "./Confirmation/Confirmation"
import AdminLogin from "./Admin/AdminLogin"
import AdminPanel from "./Admin/AdminPanel"

export default class App extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <Navbar />
                    <div className = "container">
                        <Route
                            exact path = "/" component = {Homepage}
                        />
                        <Route
                            exact path = "/Products" component = {Products}
                        />
                        <Route
                            exact path = "/Product/:id" component = {Product}
                        />
                        <Route
                            exact path = "/About"  component = {About}
                        />
                        <Route
                            exact path = "/Contact"  component = {Contact}
                        />
                        <Route
                            exact path = "/Cart" component = {Cart}
                        />
                        <Route
                            exact path = "/Checkout" component = {Checkout}
                        />
                        <Route
                            exact path = "/Confirmation" component = {Confirmation}
                        />
                        <Route
                            exact path = "/AdminLogin" component = {AdminLogin}
                        />
                        <Route
                            exact path = "/AdminPanel" component = {AdminPanel}
                        />
                        <Route
                            exact path = "/LogOut" component = {LogOut}
                        />
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}

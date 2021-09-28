import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs'
import Checkout from './components/checkout/Checkout'
import Contact from './components/contact/Contact'
import Error from './components/error/Error'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import NavBar from './components/navbar/NavBar'
import Products from './components/products/Products'
import Shop from './components/shop/Shop'
import ShoppingCart from './components/shoppingcart/ShoppingCart'

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/products/:id" component={Products}/>
          {/* <Route exact path="/products" component={Products}/> */}
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/about-us" component={AboutUs}/>
          {/* <Route exact path="/contact-us" component={Contact}/> */}
          <Route exact path="/mycart" component={ShoppingCart}/>
          <Route exact path="/order-complete" component={Checkout}/>
          <Route exact path="/error" component={Error}/>
          <Route component={Error}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App

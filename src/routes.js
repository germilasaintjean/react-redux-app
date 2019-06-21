import React, {Component} from 'react';
// import {Route, IndexRoute} from 'react-router';
import {BrowserRouter, Route } from 'react-router-dom';

import Home from './components/common/HomePage'
import About from './components/common/AboutPage'
import BookPage from './components/book/BookPage'
// eslint-disable-next-line no-unused-vars
import App from './components/App'
 import CartPage from "./components/cart/CartPage"
import BookDetailsPage from "./components/book/BookDetailsPage"

class Routing extends Component {
render() {
  return (

  <BrowserRouter>     
    <App/>

    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route exact path="/books" component={BookPage}></Route>
   <Route path="/books/:id" component={BookDetailsPage}></Route>
   <Route path="/cart" component={CartPage}></Route>
  {/* </Route> */}
</BrowserRouter>

);
  }
}
export default Routing
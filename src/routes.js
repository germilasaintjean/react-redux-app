import React, {Component} from 'react';
// import {Route, IndexRoute} from 'react-router';
import {BrowserRouter, Route } from 'react-router-dom';

import Home from './components/common/HomePage'
import About from './components/common/AboutPage'
import Book from './components/book/BookPage'
// eslint-disable-next-line no-unused-vars
import App from './components/App'
// import BookPage from "../book/BookPage"
// import CartPage from "../cart/CartPage"
// import BookDetailsPage from "./book/BookDetailsPage"

class Routing extends Component {
render() {
  return (
<div>
  <BrowserRouter>     
    <App/>

    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/books" component={BookPage}></Route>
    <Route path="/books" component={BookPage}></Route>
   <Route path="/books/:id" component={BookDetailsPage}></Route>
   <Route path="/cart" component={CartPage}></Route>
  {/* </Route> */}
</BrowserRouter>
</div>
);
  }
}
export default Routing
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component}  from 'react';
import {NavLink} from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Your Books</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/books">Book</NavLink></li>
              <li><NavLink to="/cart">Cart</NavLink></li>
              <li><NavLink to="/more">More</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Each smaller components */}
      {/* {props.children} */}
    </div>



  );
};
}

export default App
  

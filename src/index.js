import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';

import * as bookActions from './actions/bookActions';

import { Provider } from 'react-redux';
// import { render } from 'react-dom';
// import { BrowserRouter, routes } from 'react-router-dom';
import Routes from './routes';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore';



const store = configureStore();

store.dispatch(bookActions.fetchBooks());


ReactDom.render(
  <Provider store={store}>
    <Routes/>,

    {/* <Router routes={routes} history={BrowserRouter} /> */}
  </Provider>,
  document.getElementById('app')
);
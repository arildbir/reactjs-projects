import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

import RouterTree from './routesConfig';
import rootReducer from './rootReducer';

//takes the root reducer. A reducer i a function that takes state and action and returns new state.
//return state (next par could be inital state. next par is applyMiddleware
const store = createStore (
  (state = {}) => state,
  //applyMiddleware(thunk) //thunk allows us to dispatch async actions
  compose(
    applyMiddleware(thunk)
  )
)


ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
  <RouterTree/>
</BrowserRouter>
</Provider>, document.getElementById('root'));

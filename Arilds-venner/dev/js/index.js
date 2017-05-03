import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './components/app';


const store = createStore(allReducers);  //dette er det faste store objektet - alle data i webappen.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));

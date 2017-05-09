import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';

import RouterTree from './routesConfig'


ReactDOM.render(
  <BrowserRouter>
  <RouterTree/>
</BrowserRouter>, document.getElementById('root'));

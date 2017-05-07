import React, {Component} from 'react';
import {Redirect, BrowserHistory} from 'react-router-dom';

export class NotFoundRoute extends Component {
  constructor(props) {
    super(props);
  } //constructor

  render() {
    return <Redirect to='/'/>;
  } //render
} //class

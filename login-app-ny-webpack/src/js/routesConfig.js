import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import Greetings from './components/greetings'
import SignupPage from './components/signup/signupPage'
import NavigationBar from './components/navigationBar'

class RouterTree extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <RoutesConfigRendering />
      </div>
    )
  }
}//class
export default RouterTree

//set up for the routing of each page
const RoutesConfigRendering = () =>  {
    return (
      <Switch>
        <Route exact path='/' component={Greetings}/>
        <Route exact path='/signup' component={SignupPage}/>
        <Route component={NotFoundRoute} />
      </Switch>
    )

} //RoutesConfigRendering

const NotFoundRoute = () => (<Redirect to='/'/>)

import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from './components/home/homePage'
import SignupPage from './components/signup/signupPage'
import GithubPage from './components/github/githubPage'
import NavigationBar from './components/navigationBar/navigationBar'
import EditProfilePage from './components/editProfile/editProfilePage'
import Loggin from './components/loggin/loggin'
import RequireAuth from './HOC/require_authentication'

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
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/signup' component={SignupPage}/>
        <Route exact path='/github' component={GithubPage}/>
        <Route exact path='/loggin' component={Loggin}/>
        <Route exact path='/editProfile' component={RequireAuth(EditProfilePage)}/>
        <Route component={NotFoundRoute} />
      </Switch>
    )

} //RoutesConfigRendering

const NotFoundRoute = () => (<Redirect to='/'/>)

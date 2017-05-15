import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li className="navbar-brand">
                <NavLink to="/" exact activeStyle={{color: 'red'}}>Hjem</NavLink>
              </li>
              <li className="navbar-brand">
                <NavLink to="/github" exact activeStyle={{color: 'red'}}>Github-profil</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-header navbar-right">
            <ul className="nav navbar-nav">
            <li className="navbar-brand">
                <NavLink to="/signup" activeStyle={{color: 'red'}}>Registrering</NavLink>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavigationBar

import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';


class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to='/' className="navbar-brand">Hjem</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to='/signup'>Registrer deg</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavigationBar

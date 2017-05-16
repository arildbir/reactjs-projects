import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loggOutUser} from '../../actions/userActions';



class NavigationBar extends Component {

  renderLogin() {
    if (this.props.user.userLoggedIn) {
      return( <li className="navbar-brand">
        <Link className="nav-link" to="/" onClick={this.props.loggOutUser}>Log ut</Link>
      </li>)
    }//if
    else {
      return(<li className="navbar-brand">
        <Link className="nav-link" to="/loggIn">Logg inn</Link>
      </li>
    )
    }//else
  }//renderLogin

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
              <li className="navbar-brand">
                  <NavLink to="/editProfile" activeStyle={{color: 'red'}}>Din bruker</NavLink>
              </li>
              {this.renderLogin()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({loggOutUser : loggOutUser}, dispatch)  //obs: remember to use in render as this.props.loggOutUser
}

//passing in action as a property, same as for the State
//dispatch is the same as saying 'pass a function'

// was : export default UserList
//became: when we want mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component {

  createListItems() {
    return this.props.users.map((user) => {
      return (
        <li  key={user.id} onClick={() => this.props.selectUser(user)}> {user.first} {user.last} </li>
        //note that the onClick is a function!!
      );
    });
  }
  render () {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}
//the next part is the Containsers-part. Over is the Component.

//mapStateToProps takes a piece of your application-state (the main data) and passes it in to your component as a property
//we want to pass inn our users from reducers/index.js ('users: UserReducer')
//takes a part of the state and sends it in to the component as a prop
function mapStateToProps(state) {
  return {
    users: state.users
  };
}
//passing in action as a property, same as for the State
//dispatch is the same as saying 'pass a function'
function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch) //dispatch is used in redux to call the action-function
}
// was : export default UserList
//became: when we want mapStateToProps
export default connect(mapStateToProps, matchDispatchToProps)(UserList);

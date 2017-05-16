import React, {Component} from 'react';
import {connect} from 'react-redux';



export class HomePage extends Component {

  render() {
    const {user} = this.props;
    console.log ("HomePage har nå props:", this.props)
    console.log ("HomePage har nå user:", user)
    return (
      <div>
        <h1>Heisann fra forsiden!</h1>
        <h2>Din epostadresse er: {user.username}</h2>
      </div>

    );
  }
}//class


function mapStateToProps(state) {
  return {
    user: state.user.user
  };
}

//passing in action as a property, same as for the State
//dispatch is the same as saying 'pass a function'

// was : export default UserList
//became: when we want mapStateToProps
export default connect(mapStateToProps)(HomePage);

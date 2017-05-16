import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createNewUser} from '../../actions/userActions';

import SignupForm from './signupForm';

class SignupPage extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    //const { userSignupRequest } = this.props;
    const {user} = this.props;
    console.log ("Page props", this.props);
    console.log ("Page state", this.state);
    console.log ("Page user", user);
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm onCreateNewUser={this.props.createNewUser} />
        </div>
      </div>
    );
  }
}//class


SignupPage.propTypes = {
//  userSignupRequest: PropTypes.func.isRequired,
}


//export default connect(null, {} )(SignupPage);
//instead of null one uses mapStateToProps: takes a piece of your application-state (the main data) and passes it in to your component as a property
//userSignupRequest is passed in as a action as a property, same as for the State (prev line)


function mapStateToProps(state) {
  return {
    user: state.user.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createNewUser : createNewUser}, dispatch)  //obs: remember to use in render as this.props.createNewUser
}

//passing in action as a property, same as for the State
//dispatch is the same as saying 'pass a function'

// was : export default UserList
//became: when we want mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);

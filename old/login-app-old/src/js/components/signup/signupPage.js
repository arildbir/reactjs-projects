import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {userSignupRequest} from '../../actions/signupActions';

import SignupForm from './signupForm';

export class SignupPage extends Component {

  render() {
    const { userSignupRequest } = this.props;
    console.log ("Page", this.context);
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} />
        </div>
      </div>
    );
  }
}//class


SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}


export default connect(null, {userSignupRequest} )(SignupPage);
//instead of null one uses mapStateToProps: takes a piece of your application-state (the main data) and passes it in to your component as a property
//userSignupRequest is passed in as a action as a property, same as for the State (prev line)

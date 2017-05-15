import React, {Component} from 'react';
import PropTypes from 'prop-types';
import validateInput from '../../../stub/signup';
import TextFieldGroup from './textFieldGroup';
import classnames from 'classnames'; //conditionally joining classNames together.
import {connect} from 'react-redux';

//import { withRouter } from 'react-router-dom';  //awesome wrapper that will add router properties to you component, then you can access the history and use push

import timezones from '../../data/timezones.js';

 class SignupForm extends Component {

   constructor (props) {
     super(props);
     this.state = {
      username: '',
      email: '',
      github: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false,
      invalid: false,
      userLoggedIn:false

    }
     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }

//event.target.name refers to label-name in the given label this method is called from
onChange(e) {
  this.setState ({[e.target.name]: e.target.value});
}

isValid() {
  const {errors, isValid } = validateInput(this.state);
  console.log ("errors", errors);
  console.log ("isValid", isValid);
  if (!isValid) {
    this.setState ({errors})
  }
  return isValid;
}

onSubmit(e) {
  e.preventDefault();
  console.log ("onSubmit sin state: ", this.state);
  if (this.isValid()) {
      let newState = this.state;
      newState.userLoggedIn=true;
      console.log ("onCreateNewUser newState:", newState);
      this.setState(newState);
      console.log ("onCreateNewUser får:", this.state);
      this.props.onCreateNewUser(this.state);
      this.props.history.push('/') //history is required and passed from parrent class
    }
}

  render() {
    //ES6 iterate object. get key value from object
    console.log ("this.props", this.props);

  const { errors } = this.state;
  const options = [];
    Object.entries(timezones).forEach((key, val) => {
      //console.log ("key", key);
      //console.log ("val", val);
      options.push (<option key={key[1]} value={key[1]}>{key[0]}</option>);
    });

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Registrer deg her</h1>

        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.username}
          field="username"
        />

        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.email}
          field="email"
        />
        <TextFieldGroup
          error={errors.github}
          label="Github"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.github}
          field="github"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />

        <div className={classnames("form-group", { 'has-error': errors.timezone })}>
          <label className="control-label">Timezone</label>
          <select
            className="form-control"
            name="timezone"
            onChange={this.onChange}
            value={this.state.timezone}>
            <option value="" disabled>Choose Your Timezone</option>
            {options}
          </select>
          {errors.timezone && <span className="help-block">{errors.timezone}</span>}
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
            Registrer deg
          </button>
        </div>
      </form>
    );//return
  }//render
}//class


SignupForm.propTypes = {
  onCreateNewUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}


//export default withRouter(SignupForm);
export default SignupForm;

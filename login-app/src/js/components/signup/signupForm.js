import React, {Component} from 'react';
//import map from 'lodash/map';

import timezones from '../../data/timezones.js';

 class SignupForm extends Component {
   constructor (props) {
     super(props);
     this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false,
      invalid: false
    }
     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }

//event.target.name refers to label-name in the given label this method is called from
onChange(e) {
  this.setState ({[e.target.name]: e.target.value});
}

onSubmit(e) {
  e.preventDefault();
  console.log (this.state);
}


  render() {
/*    const options = map(timezones, (val, key) =>
          <option key={val} value={val}>{key}</option>
        );*/
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Registrer deg her</h1>
        <div className="form-group">
          <label className="control-label">Brukernavn</label>
          <input value={this.state.username} onChange={this.onChange} type="text" name="username" className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Tidssone</label>
          <select value={this.state.timezone} onChange={this.onChange} type="text" name="timezone" className="form-control">
            <option value="" disabled>Velg din tidssone</option>
          </select>
        </div>


        <div className="form-group">
          <button className="btn btn-primary btn-lg">Registrer deg</button>
        </div>
      </form>
    );
  }
}//class
export default SignupForm

import React, {Component} from 'react';

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
    //ES6 iterate object. get key value from object
  const options = [];
   Object.entries(timezones).forEach((key, val) => {
    console.log ("key", key);
    //console.log ("val", val);
    options.push (<option key={key[1]} value={key[1]}>{key[0]}</option>);
  });

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Registrer deg her</h1>
        <div className="form-group">
          <label className="control-label">Brukernavn</label>
          <input value={this.state.username} onChange={this.onChange} type="text" name="username" className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Tidssone</label>
          <select value={this.state.timezone} onChange={this.onChange} name="timezone" className="form-control">
            <option value="" disabled>Velg din tidssone</option>
            {options}
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

import React, {Component} from 'react';
import {connect} from 'react-redux';


export class EditProfilePage extends Component {
  render() {
        const {user} = this.props
        const {github} = this.props
    return (
      <div>
        <h1>Hei fra editpage</h1>
          <div><pre>{JSON.stringify(user, null, 2) }</pre></div>
          <div><pre>{JSON.stringify(github, null, 2) }</pre></div>
      </div>
    )
  }//render


}//class

function mapStateToProps(state) {
  return {
    user: state.user,
    github: state.github
  };
}

export default connect(mapStateToProps)(EditProfilePage);

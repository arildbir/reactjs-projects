import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getGithubProfile} from '../../actions/githubActions';


export class Github extends Component {

  componentDidMount() {
    const {github} = this.props
    const {user} = this.props.user
    console.log ("Github componentDidMount() with github :", github)
    console.log ("Github componentDidMount() with user:", user)
    if (user.userLoggedIn) {
      this.props.dispatch(getGithubProfile(user.github))
      //this.props.getGithubProfile(user.github);
    }
  }

  render() {
    const {github} = this.props.github
    const {user} = this.props.user
    console.log ("Page props", this.props);
    console.log ("Page state", this.state);
    console.log ("Page github", github);
    console.log ("Page user", user);

        if (!user.userLoggedIn) { //check if object is {}
            return (<h1>Registrer deg for å se dine data fra Github</h1>);
        }
        return (
              <div>
                <h1>Github data</h1>
                <div><pre>{JSON.stringify(github, null, 2) }</pre></div>;
              </div>
        );
    }
}//class

function mapStateToProps(state) {
  return {
    github: state.github,
    user: state.user
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({getGithubProfile : getGithubProfile}, dispatch)  //obs: remember to use in render as this.props.createNewUser
}
//passing in action as a property, same as for the State
//dispatch is the same as saying 'pass a function'

// was : export default UserList
//became: when we want mapStateToProps
export default connect(mapStateToProps)(Github);

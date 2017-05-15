import React, {Component} from 'react';
import {connect} from 'react-redux';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class UserDetail extends Component {

    render() {
      const {user} = this.props;
        if (Object.keys(user).length === 0 && user.constructor === Object) { //check if object is {}
            return (<div>Velg en av vennene over....</div>);
        }
        return (
            <div>
                <img src={user.thumbnail} />
                <h2>{user.first} {user.last}</h2>
                <h3>Alder: {user.age}</h3>
                <h3>Beskrivelse: {user.description}</h3>
            </div>
        );
    }
}
//the class above is the Component, below is the container

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}
export default connect(mapStateToProps)(UserDetail);

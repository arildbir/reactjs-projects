import React, {Component} from 'react';
import {connect} from 'react-redux';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Velg en av vennene over....</div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Alder: {this.props.user.age}</h3>
                <h3>Beskrivelse: {this.props.user.description}</h3>
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

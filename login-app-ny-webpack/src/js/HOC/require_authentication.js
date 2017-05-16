import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export default function (HocChild) {
  class Authentication extends Component {

   componentWillMount() {
     console.log ("RequireAuth this.props.user", this.props.user)
      if (!this.props.user.userLoggedIn) {
        this.context.router.history.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.user.userLoggedIn) {
        this.context.router.history.push('/')
      }
    }

    render () {
      return <HocChild {...this.props} />
    }//render
  }//class
  Authentication.contextTypes = {
    router: PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
      user: state.user.user
    };
  }//mapStateToProps

  return connect(mapStateToProps)(Authentication);


}//function

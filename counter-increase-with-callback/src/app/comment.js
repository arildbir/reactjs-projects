import React, {Component} from 'react';

export default class Comment extends Component {
  constructor (props) {
      super(props);
    }

    render () {
      return (
         <button onClick={this.props.triggerParentUpdate}>Update</button>
         )
    }//render

  }//class

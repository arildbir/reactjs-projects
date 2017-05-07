import React, {Component} from 'react';
import Comment from './comment.js';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {counter:4}
    this.updateThisCounter = this.updateThisCounter.bind(this);
  }
  updateThisCounter() {
    this.setState({counter:this.state.counter + 1});
  }

  render() {
    return (
      <div>
      <div>{this.state.counter}</div>
      <Comment triggerParentUpdate={this.updateThisCounter}></Comment>
      </div>
    );
  }
}

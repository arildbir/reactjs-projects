import React, {Component} from 'react';import ReactDOM from "react-dom";

//Create a component
class TodoComponent extends Component {

  render () {
    return (
      <div>
        <h1>Arild er kul</h1>
        <p>Superkul assa</p>
      </div>
    );
  }
}

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));



//gamle utgåtte måten:
/*
var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    render: function(){
        return(
            <h1>Heisann</h1>
        );
    }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
*/

import React, {Component} from 'react';

import '../css/todo.css';
import '../css/todoItem.css';

export class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  } //constructor

  /*  onRemove(element){
    let value = element.target.parentNode.querySelector('span').innerText;   //we are on button, we go to parrent Li, find its span, and spans text
    this.props.onRemove(value);
  }
  */
  onRemove(i) {
    this.props.onRemove(i);
  }

  render() {
    let items = this.props.tasks.map((element, i) => {
      return <li key={i}>
          <div className="todo-item">
            <span className="item-name">{element}</span>
            <button className="item-remove" onClick={this.onRemove}>X</button>
          </div>
        </li>
    });

    return (
      <div id="todo-list">
        <ul>
          {items}
        </ul>
      </div>


    )
  } //render

} //class

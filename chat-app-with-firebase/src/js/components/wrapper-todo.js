import React, {Component} from 'react';
import {AddNewTask} from './form-add-new-task.js';
import {ToDoList} from './list-to-do-list.js';

//CSS
import '../css/global.css';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {messages : props.messages}
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }//constructor

  componentDidMount() {
    console.log ("mount");
    firebase.database().ref('messages/').on('value', (snapshot) => {
      const currentMessages = snapshot.val();
      if (currentMessages != null) {
        let arr = Object.keys(currentMessages).map((k) => currentMessages[k]) //convert object to array
        this.setState({messages: arr})
      }
      else this.setState({messages: []})
    })
  }

  addToList (value) {
    let id = this.state.messages.length;
    firebase.database().ref('messages/'+id).set(value);
  }

  removeFromList(i) {
    firebase.database().ref('messages/' + i).remove();
  }

  render() {
    return (
      <div>
        <h1>Todo-app</h1>
        <AddNewTask addToList={this.addToList}/>
        <ToDoList onRemove={this.removeFromList} messages={this.state.messages}/>
      </div>
    );
  }//render

}//class


/*
//using the text to remove from list
removeFromList(text) {
  let updatedTasks = this.state.tasks;
  updatedTasks.splice(updatedTasks.indexOf(text), 1);
  this.setState({tasks: updatedTasks});
  this.updateLocalStorage(updatedTasks);
}

*/

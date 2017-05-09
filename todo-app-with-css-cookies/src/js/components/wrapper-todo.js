import React, {Component} from 'react';
import {AddNewTask} from './form-add-new-task.js';
import {ToDoList} from './list-to-do-list.js';


//CSS
import '../css/global.css';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: props.tasks}
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }//constructor


  addToList (text) {
    let updatedTasks = this.state.tasks;
    updatedTasks.unshift(text); //push to top off array
  //  updatedTasks.push(text);
    this.setState({tasks: updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }
  removeFromList(i) {
    console.log ("removing item on:" + i);
    let arr = this.state.tasks;
    arr.splice(i, 1);
    this.setState({tasks: arr});
    this.updateLocalStorage(arr);
  }

  updateLocalStorage(updatedTasks) {
    console.log ("saved the task:", updatedTasks);
    localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
  }

  render() {
    return (
      <div>
        <h1>Todo-app</h1>
        <AddNewTask addToList={this.addToList} />
        <ToDoList tasks={this.state.tasks} onRemove={this.removeFromList}/>
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

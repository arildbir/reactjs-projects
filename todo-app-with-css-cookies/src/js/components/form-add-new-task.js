import React, {Component} from 'react';

//CSS
import '../css/addItem.css';

export class AddNewTask extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
  } //constructor


  addTask(event) {          //the event is for instance using the form in HTML. This is passed to the addTask.
    event.preventDefault(); //stop reload of webpage
    let input = event.target.querySelector('input'); //alternativ måte å skrive innput på: let text = event.target.querySelector('input').value;
    let value = input.value;
    input.value = ''; //reset the inputField
    this.props.addToList(value); //addToList er callback from parrent todo
  }

  render() {
    return (
      <form id="add-todo" onSubmit={this.addTask}>
        <input type="text"/>
        <input type="submit" value="Legg til"/>
      </form>
    )
  } //render

} //class

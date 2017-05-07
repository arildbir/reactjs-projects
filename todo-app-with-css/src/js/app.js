import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Todo} from './components/wrapper-todo.js';
import {About} from './components/about.js';
import {NotFoundRoute} from './components/not-found-route.js';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';

//appens inputparemetere
let taskList = ["Spise iskrem med strø", "Stek opp bacon"];
//bruker minne til browser for å huske ved refresh
let tasks = localStorage.getItem('storedTasks'); //i console se på den ved å skrive localStorage.setItem
if (tasks) {
  taskList = JSON.parse(tasks);
}

//Intital app to call all components
class Root extends Component {
  render() {
    return (
        <BrowserRouter>
          <RouterTree/>
        </BrowserRouter>
    )
  }
} //class

const RouterTree = () => (<div><Header /><Main /></div>)

//set up for the links in Nav-bar
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Hjem</Link></li>
        <li><Link to='/about'>Om meg</Link></li>
      </ul>
    </nav>
  </header>
)//Header

//set up for the routing of each page
class Main extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/about' component={About}/>
        <Route component={NotFoundRoute} />
      </Switch>
    )
  }
} //class

//the root of the Task-app
class App extends Component {
  render() {
    return (
      <div>
        <header/>
        <Todo tasks={taskList}/>
      </div>
    )
  }
} //class

ReactDOM.render(<Root/>, document.getElementById('root'));

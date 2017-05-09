import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Todo} from './components/wrapper-todo.js';
import {About} from './components/about.js';
import {NotFoundRoute} from './components/not-found-route.js';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import { instanceOf } from 'prop-types';
import * as Cookies from "js-cookie";

//appens inputparemetere
let taskList = ["Spise iskrem med strø", "Stek opp bacon"];
Cookies.set('tasks', {tasks:["Spise iskrem med strø", "Stek opp bacon"]});

//Intital app to call all components
export class Root extends Component {
  constructor(props) {
    super(props);
  }
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
    let cookie = Cookies.get('tasks'); // => 'value'
    return (
      <div>
        <header/>
        <p>{cookie}</p>
        <Todo tasks={taskList}/>
      </div>
    )
  }
} //class

ReactDOM.render(<Root/>, document.getElementById('root'));

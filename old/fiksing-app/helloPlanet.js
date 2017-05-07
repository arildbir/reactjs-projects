import React from 'react';
import SetProps from './components/setProps';

class HelloPlanet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {counter:0};
    this.updateThisCounter = this.updateThisCounter.bind(this);
  }

  updateThisCounter() {
    this.setState({counter:this.set.counter + 1});
  }

  render () {
    return (
          <div>
              <span>{this.state.counter}</span>
              <SetProps triggerParentUpdate={this.updateThisCounter}></SetProps>
          </div>
        );
  }
}

export default HelloPlanet;

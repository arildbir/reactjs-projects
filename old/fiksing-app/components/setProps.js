import React from 'react';

export class SetProps extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <button onClick={this.props.triggerParentUpdate}>Update</button>
  }


}//class

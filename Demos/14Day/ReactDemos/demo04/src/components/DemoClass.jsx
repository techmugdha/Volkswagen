import { Component } from 'react';

class DemoClass extends Component {
  state = {
    name: 'Hugh Jackman',
  };

  // First method getting invoked after render happens, only once
  componentDidMount = () => {
    console.log('componentDidMount');
  };

  // state changes after invoking this.setState()-
  // checking whether UI should reflect the changes? if true: it will call render method
  shouldComponentUpdate = () => {
    console.log('shouldComponentUpdate');
    return true;
  };
  // now since UI updation is done , did update method will get called at the end
  componentDidUpdate = () => {
    console.log('componentDidUpdate');
  };
  HandleNameChange = () => {
    this.setState({ name: 'Bobba Fett' });
  };
  render() {
    console.log('render method');
    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={this.HandleNameChange}>Change Name</button>
      </>
    );
  }
}

export default DemoClass;

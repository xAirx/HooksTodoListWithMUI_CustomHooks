import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    // calling super for inhertiance purposes
    super(props);
    // setting immidiate state
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <h1>The count is: {this.state.count}</h1>
        <button type="button" onClick={this.increment}>
          Add One
        </button>
      </>
    );
  }
}

export default Counter;

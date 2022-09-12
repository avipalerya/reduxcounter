import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Counter={this.props.counter}</h1>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </div>
    );
  }
}

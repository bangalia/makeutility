import React, { Component } from "react";
import Button from "./Button.js";
import "./Like.css";
class Like extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div class="Likes">
        <Button title={"-"} task={() => this.decrementCount()} />
        <h2>{count} </h2>
        <Button title={"+"} task={() => this.incrementCount()} />
      </div>
    );
  }
}

export default Like;
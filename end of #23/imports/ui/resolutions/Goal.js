import React, { Component } from "react";

export default class Goal extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" />
        {this.props.goal.name}
      </li>
    );
  }
}

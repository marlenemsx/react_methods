import React, { Component } from "react";
import "./Liste.css";
import Todo from "./Todo";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <Todo
            remove={this.props.remove}
            cocher={this.props.cocher}
            todo={todo}
          />
        ))}
      </ul>
    );
  }
}

export default Liste;

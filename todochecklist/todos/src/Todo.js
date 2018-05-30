import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.remove = this.remove.bind(this);
    this.toggled = this.toggled.bind(this);
  }

  remove(e) {
    this.props.remove(this.props.todo);
  }

  toggled(e) {
    this.setState({ checked: e.target.checked });
    this.props.cocher(this.props.todo, e.target.checked);
  }
  render() {
    let classActive = "";
    if (this.state.checked) {
      classActive = "active";
    }

    return (
      <div className="box">
        <li className={classActive}>
          <input type="checkbox" onChange={this.toggled} />
          {this.props.todo.title}
          <button onClick={this.remove}>X</button>
        </li>
      </div>
    );
  }
}

export default Todo;

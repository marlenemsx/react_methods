import React, { Component } from "react";
import "./MagicTodo.css";

class MagicTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    // bind handleSubmit pour ADD
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //   action d'ADD à la validation du Form
  handleSubmit(e) {
    e.preventDefault();
    // this.setState({
    //   title: e.target.value
    // });
    this.props.addTodo(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Cosa dovrebbe essere fatto?"
          required
          onChange={e => this.setState({ title: e.target.value })}
        />
      </form>
    );
  }
}

export default MagicTodo;

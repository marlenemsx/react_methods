import React, { Component } from "react";
class Mytimer extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
    console.log("une update a eu lieu");
  }

  render() {
    return (
      <div>
        <h3>My timer</h3>
        <img
          src="https://wildcodeschool.fr/wp-content/uploads/2017/01/logo_orange_pastille.png"
          alt="wild"
        />
        <h2>Compteur : {this.state.counter}</h2>
      </div>
    );
  }
}

export default Mytimer;

import React, { Component } from "react";
import MagicButton from "./MagicButton";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }
  render() {
    return (
      <div>
        <h3>Welcome wilders</h3>
        <MagicButton />
      </div>
    );
  }
}

export default Home;

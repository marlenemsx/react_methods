import React, { Component } from "react";
// withRouter : fonction qui transmet les fonctionnalités à un composant
import { withRouter } from "react-router";

class MagicButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.augmenter = this.augmenter.bind(this);
  }

  augmenter() {
    const nb = this.state.counter + 1;
    // si clic supp à 5 ,  redirection sur le profil de tifus
    if (nb < 5) {
      this.setState({
        counter: nb
      });
    } else {
      this.props.history.push("/contact");
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.augmenter}>Augmenter</button>
      </div>
    );
  }
}

// hight order component
export default withRouter(MagicButton);

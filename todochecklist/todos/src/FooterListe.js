import React, { Component } from "react";
import "./FooterListe.css";

class FooterListe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <p>
        <i>Nombre de todos restantes:{this.props.nb}</i>
      </p>
    );
  }
}

export default FooterListe;

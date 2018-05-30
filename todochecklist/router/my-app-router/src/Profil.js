import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Message from "./Message";
import Photo from "./Photo";
import "./Profil.css";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="pageprofil">
        <h3>
          Le profil de:
          {this.props.match.params.username}
        </h3>
        <ul>
          <Link to={`/profil/${this.props.match.params.username}/message`}>
            <li>Messages de {this.props.match.params.username}</li>
          </Link>
          <Link to={`/profil/${this.props.match.params.username}/photo`}>
            <li>Photo de {this.props.match.params.username}</li>
          </Link>
        </ul>
        <Route path="/profil/:username" exact component={Message} />
        <Route path="/profil/:username/message" component={Message} />
        <Route path="/profil/:username/photo" component={Photo} />
      </div>
    );
  }
}

export default Profil;

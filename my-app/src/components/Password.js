import React, { Component } from "react";

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nom:",
      mail: "E-mail:",
      password: "Votre mot de passe:"
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Créer un compte:</h3>
        </div>
        <div className="container-fluid">
          <div className="col-lg-3">
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="col-lg-3">
            <input
              type="text"
              id="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <div className="col-lg-6">
            <textarea
              name="email"
              id="email"
              value={this.state.mail}
              onChange={this.onChange}
              cols="30"
              rows="10"
            />
          </div>
          <div className="col-lg-12">
            <button type="submit" class="btn btn-success">
              Ok
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Password;

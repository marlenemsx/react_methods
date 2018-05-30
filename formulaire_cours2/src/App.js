import React, { Component } from "react";
import Formulaire from "./Formulaire";
import "bootstrap/dist/css/bootstrap.css";
import Liste from "./Liste";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          nom: "Vincent Ballut",
          bio: "je suis caractériel..."
        },
        {
          nom: "Brad Pitt",
          bio: "Stagiaire Bootstrap 3"
        },
        {
          nom: "Donald Trump",
          bio: "Qui m'a volé mon postiche???"
        }
      ]
    };
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
  }
  add(newUser) {
    console.log(newUser);
    this.setState({
      users: [...this.state.users, newUser]
    });
  }

  delete(position) {
    let users = this.state.users;
    users.splice(position, 1);
    this.setState({
      users
    });
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <Liste users={this.state.users} delete={this.delete} />
          <hr />
          <Formulaire addUser={this.add} />
        </div>
      </div>
    );
  }
}

export default App;

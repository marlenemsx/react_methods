import React, { Component } from "react";

class Liste extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Liste des utilisateurs</h3>
        <div>
          <ul className="list-group">
            {this.props.users.map((user, index) => (
              <li className="list-group-item">
                <h4>{user.nom}</h4>
                <i>{user.bio}</i>
                <div>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={e => this.props.delete(index)}
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Liste;

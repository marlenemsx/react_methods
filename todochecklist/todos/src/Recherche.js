import React, { Component } from "react";
import "./Recherche.css";

class Recherche extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar justify-content-end">
          <form className="form-inline">
            <input
              className="form-control"
              type="search"
              placeholder="Ricerca..."
              aria-label="Search"
              onChange={e => this.props.search(e.target.value)}
            />
            {/* <button className="btn btn-outline-success" type="submit">
              Go
            </button> */}
          </form>
        </nav>
      </div>
    );
  }
}

export default Recherche;

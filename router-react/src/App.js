import React, { Component } from "react";

// import des elements et des composants
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import History from "./History";
import Mytimer from "./Mytimer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quête React router</h1>
        </header>
        {/* link des routes */}
        <ul>
          <li>
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notre-history"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
              exact
            >
              History
            </NavLink>
          </li>
        </ul>

        {/*********** mes routes **************/}
        <Route exact path="/" component={Home} />
        <Route path="/notre-history" component={History} />

        <Mytimer />
      </div>
    );
  }
}

export default App;

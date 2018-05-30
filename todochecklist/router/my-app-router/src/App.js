import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import des elements et des composants
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Profil from "./Profil";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {/* link des routes */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/profil/Tifus">Profil de Tifus</Link>
          </li>
          <li>
            <Link to="/profil/Blomki">Profil de Blomki</Link>
          </li>
        </ul>
        {/*********** mes routes **************/}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/profil/:username" component={Profil} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Author from './Author';
import Password from './Password';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className="App">
          <Author name="User" />
        </div>

        <div>
          <Password />
        </div>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routing from './Routing';

import User from './Pages/User';

class App extends Component {
  render() {
    return (
      <main>
        <div>
          <Routing />
        </div>
      </main>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Routing from './Routing';
import { storage } from './configuration'


class App extends Component {
  render() {

    // storage.save('blah', { message: 'hello'})
    // const value = storage.get('blah')
    // console.log(value)

    return (
      <main>
        <Routing />
      </main>
    );
  }
}

export default App;

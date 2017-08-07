import React, { Component } from 'react';

class Theme extends Component {

  render() {
    return (
      <main>
        <div>
          <h2>Hello London!</h2>
          <h3>You have completed your story. You may play your movie from the beginning or start a new story.</h3>
          <a href="/Library">
            <i className="material-icons">movie</i>
          </a>
        </div>
      </main>
    );
  }
}

export default Theme;
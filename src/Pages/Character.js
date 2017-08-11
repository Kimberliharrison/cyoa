import React, { Component } from 'react';

class Character extends Component {

  render() {
    return (
      <article className="user-background">
        <section className="page-content">
          <h2>Hello London!</h2>
          <h3>Pick your character to start a new movie.</h3>
          <a href="/Theme">
            <i className="material-icons">music_note</i>
          </a>
        </section>
      </article>
    );
  }
}

export default Character;
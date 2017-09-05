import React, { Component } from 'react';

class Character extends Component {

  render() {
    return (
      <div className="Character">
        <article className="character-background">
          <section className="character-content">
            <h2>Hello London!</h2>
            <h3>Pick your character to start a new movie.</h3>
            <a href="/Theme">
              <img className="icon-2" src="/Images/Icons/429-double-arrows-right.png" />
            </a>
          </section>
        </article>
      </div>
    );
  }
}

export default Character;
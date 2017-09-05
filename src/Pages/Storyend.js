import React, { Component } from 'react';

class Theme extends Component {

  render() {
    return (
      <div className="Character">
        <article className="user-background">
          <section className="page-content">
            <div>
              <h2>Hello London!</h2>
              <h3>You have completed your story. You may play your movie from the beginning or start a new story.</h3>
              <a href="/Library">
                <img className="icon-2" src="/Images/Icons/movie_library.png" />
              </a>
            </div>
          </section>
        </article>
      </div>
    );
  }
}

export default Theme;
import React, { Component } from 'react';

class Theme extends Component {

  render() {
    return (
      <article className="user-background">
        <section className="page-content">
            <div>
              <h2>Hello London!</h2>
              <h3>Pick your story and music.</h3>
              <a href="/Storyend">
                <img className="icon-2" src="/Images/Icons/429-double-arrows-right.png" />
              </a>
            </div>
        </section>
      </article>
    );
  }
}

export default Theme;
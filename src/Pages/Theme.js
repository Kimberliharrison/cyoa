import React, { Component } from 'react';

class Theme extends Component {

  render() {
    return (
      <article className="user-background">
        <section className="page-content">
          <div>
            <div>
              <h2>Hello London!</h2>
              <h3>Pick your story and music.</h3>
              <a href="/Storyend">
                <i className="material-icons">videocam</i>
              </a>
            </div>
          </div>
        </section>
      </article>
    );
  }
}

export default Theme;
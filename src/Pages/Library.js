import React, { Component } from 'react';

class Library extends Component {

  render() {
    return (
      <main>
        <div>
          <h2>Hello London!</h2>
          <h3>Here is your movie library. Select a movie to play or delete, or continue building an unfinished story.</h3>
          <a href="/User">
            <i className="material-icons">grade</i>
          </a>
        </div>
        <div className="movies">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IDbLzCPd2MY" frameborder="0" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hZ1Rb9hC4JY?list=PLdSMQMuTYK4A2e67n5JcmjQQODoRK4S-6" frameborder="0" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/afzmwAKUppU" frameborder="0" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/HwSKkKrUzUk?list=PLdSMQMuTYK4A2e67n5JcmjQQODoRK4S-6" frameborder="0" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GC_mV1IpjWA" frameborder="0" allowfullscreen></iframe>
        </div>
      </main>
    );
  }
}

export default Library;
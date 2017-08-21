import React, { Component } from 'react';
import './Library.css';

class Library extends Component {

  render() {
    return (
      <article className="library-background">
        <section className="page-content">
          <div>
            <h1>Hello London</h1>
            <a href="/User">
              <img className="icon-photo" src="/Images/ProfilePic/LondonProfilePic.png" />
            </a>
            <h2>Select a movie to play or delete.</h2>
          </div>
          <div className="movies">
            <div className="player">
              <video controls>
                <source src="https://www.youtube.com/embed/IDbLzCPd2MY" type="video/mp4" />
                <source src="https://www.youtube.com/embed/IDbLzCPd2MY" type="video/webm" />
              </video>
              <div className="controls">
                <button className="play" data-icon="P" aria-label="play pause toggle" />
                <button className="stop" data-icon="S" aria-label="stop" />
                <div className="timer">
                  <span aria-label="timer">00:00</span>
                </div>
                <button className="rwd" data-icon="B" aria-label="rewind" />
                <button className="fwd" data-icon="F" aria-label="fast forward" />
              </div>
            </div>
            {/*<iframe src="https://www.youtube.com/embed/IDbLzCPd2MY" frameborder="0" allowfullscreen></iframe>*/}
            {/*<iframe src="https://www.youtube.com/embed/hZ1Rb9hC4JY?list=PLdSMQMuTYK4A2e67n5JcmjQQODoRK4S-6" frameborder="0" allowfullscreen></iframe>*/}
            {/*<iframe src="https://www.youtube.com/embed/afzmwAKUppU" frameborder="0" allowfullscreen></iframe>*/}
          </div>
        </section>
      </article>
    );
  }
}

export default Library;

import React, { Component } from 'react';

class User extends Component {

  render() {
    return (
      <div className="User">
        <article className="user-background">
          <header className="game-title">
            <h3>Choose-Your-Own-Adventure Movie</h3>
          </header>
          <section className="user-content">
            <div className="content">
              <img
                // srcSet="./Images/ProfilePic/LondonProfilePic.png 1x,
                //         ./Images/ProfilePic/LondonProfilePic.png 1.5x,
                //         ./Images/ProfilePic/LondonProfilePic.png 2.5x"
                // sizes="(max-width: 320px) 200px,
                //        (max-width: 480px) 440px, 800px"
                src="./Images/ProfilePic/LondonProfilePic.png"
                className="profile-photo"
                alt="Edit photo"
              />
              <h2 className="greeting">Hello London!</h2>
            </div>
            <div className="icon">
              <a href="/Character">
                <img className="icon-1" src="/Images/Icons/mickey_mouse.png" />
              </a>
              <a href="/Library">
                <img className="icon-3" src="/Images/Icons/movie_library.png" />
              </a>
            </div>
          </section>
          <div className="transparent-footer"></div>
        </article>
      </div>
    );
  }
}

export default User;
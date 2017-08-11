import React, { Component } from 'react';
import '../App.css';
import '../index.css';

// const styles = {
//   pageBackground: {
//     background: `saddlebrown url('/Images/Backgrounds/1118086.jpg') no-repeat top center/100%`,
//     minHeight: '400px',
//     height: '100vh'
//     // width: '100vw'
//   }
// };

class User extends Component {

  render() {
    return (
      <article className="user-background">
        <section className="user-content">
          <div>
            <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJIAAAAJDRmMjdkMDZhLTc2ZGUtNGQyMS1hYzhjLTRkY2ZkOGMzOGI1ZA.jpg"
              className="profile-photo"
              alt="Edit photo"
              height="200"
              width="200" />
            <h2>Hello London!</h2>
          </div>
          <section className="icon">
            <a href="/Character" className="icon-1">
              <i className="material-icons">face</i>
            </a>
            <a href="/Library" className="icon-2">
              <i className="material-icons">movie</i>
            </a>
          </section>
        </section>
      </article>
    );
  }
}

export default User;
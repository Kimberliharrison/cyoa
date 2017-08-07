import React, { Component } from 'react';

class User extends Component {

  render() {
    return (
      <main>
        <div>
          <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJIAAAAJDRmMjdkMDZhLTc2ZGUtNGQyMS1hYzhjLTRkY2ZkOGMzOGI1ZA.jpg" class="profile-photo-edit__preview" alt="Edit photo" height="128" width="128" />
          {/*<a href="images/fulls/family.jpg" className="user-image"><img src="images/thumbs/family.jpg" alt="" /></a>*/}
          <h2>Hello London!</h2>
          <h4>This is your homepage.</h4>
        </div>
        <a href="/Character">
          <i className="material-icons">face</i>
        </a>
        <a href="/Library">
          <i className="material-icons">movie</i>
        </a>
      </main>
    );
  }
}

export default User;
import React, { Component } from 'react';

class twoFour extends Component {

  render() {

    let myArray = ['two-one', 'two-two', 'two-three', 'two-four', 'two-five'];
    let random1 = myArray[Math.floor(Math.random() * myArray.length)];

    let myArray2 = myArray.splice(random1, 1);
    let random2 = myArray2[Math.floor(Math.random() * myArray2.length)];

    document.links.innerHTML = random1;
    document.links.innerHTML = random2;

    return (
      <div className="twoOne">
        <article className="user-background">
          <section className="sprite-layout">
            <img src="../sprites/cat/Walk (1).png"
              id="sprite"
              className="slideIn"
            />
            <img src="../sprites/antagonists/two-one.png"
              id="alien"
              className="slideInRight"
              // onTouchTap={}
            />
          </section>
          <div className="links">
            <a href={`/${random1}`}>
              <img src={`../sprites/antagonists/${random1}.png`} className="link1" id="link1" />
            </a>
            <a href={`/${random2}`}>
              <img src={`../sprites/antagonists/${random2}.png`} className="link2" id="link2" />
            </a>
          </div>
        </article>
      </div>
    );
  }
}


export default twoFour;
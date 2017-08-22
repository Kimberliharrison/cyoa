import React, { Component } from 'react';
import './one-one.css';
// import SpriteSheet from 'sprite-sheet';


// const theImg = [{
//   name: 'cat',
//   width: 7500,
//   height: 300,
//   source: '../sprites/cat/Walk (1).png',
//   numberOfFrames: 25,
//   ticksPerFrame: 15,
//   framesToPlay: 25
// }];

class oneOne extends Component {


  render() {
    return (
      <article className="user-background">
        <section className="sprite">
          <img src="../sprites/cat/Walk (1).png"></img>
        </section>
      </article>
    );
  }
}

export default oneOne;
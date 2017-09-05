import React, {Component} from 'react';
import { Loop, Stage } from 'react-game-kit';

import OneOne from './Pages/Storyboard/one-one';

let animationFrame;

const loop = () => {
  // Update logic
  animationFrame = requestAnimationFrame(loop);
};

animationFrame = requestAnimationFrame(loop);


class Game extends Component {
  render() {
    return (
      <Loop>
        <OneOne />
        // Child components get this.context.loop
      </Loop>
    )
  }
};
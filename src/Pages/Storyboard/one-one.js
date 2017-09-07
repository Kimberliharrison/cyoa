import React, { Component } from 'react';
import { storage } from '../../configuration';

const myArray = ['two-one', 'two-two', 'two-three', 'two-four', 'two-five'];

class oneOne extends Component {

  render() {

    const random1 = myArray[Math.floor(Math.random() * myArray.length)];
    storage.save('random1', random1);
    console.log(random1);

    storage.get(random1);
    let parsedArray = myArray.filter(
      function(myArray){
        return [...myArray - random1];
      })
    ;
    storage.save('parsedArray', parsedArray);

    storage.get('parsedArray');
    const random2 = parsedArray[Math.floor(Math.random() * parsedArray.length)];
    console.log(random2);
    storage.save('random2');

    return (
      <div className="oneOne">
        <article className="user-background">
          <section className="sprite-layout">
            <img src="../sprites/cat/Walk (1).png"
              id="sprite"
              className="slideIn"
            />
            <img src="../sprites/antagonists/fairy.png"
              id="fairy"
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

export default oneOne;
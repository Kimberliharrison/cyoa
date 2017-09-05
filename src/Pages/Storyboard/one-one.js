import React, { Component } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';

const myArray = ['two-one', 'two-two', 'two-three', 'two-four', 'two-five'];

reactLocalStorage.set('var', true);
reactLocalStorage.get('var', true);
reactLocalStorage.setObject('var', {'test': 'test'});
reactLocalStorage.getObject('var');

// setter
localStorage.setItem('myArray', JSON.stringify(myArray));

// getter
const parsedArray = JSON.parse(localStorage.getItem('myArray'));

class oneOne extends Component {

  constructor(props) {
    super(props);
    this.state = { parsedArray };
  }


  render() {

    const random1 = parsedArray[Math.floor(Math.random() * parsedArray.length)];
    document.links.innerHTML = random1;

    let parsedArray2 = [...parsedArray].filter(
      function (parsedArray, random1) {
        return parsedArray - random1;
      }, 0);
    const random2 = parsedArray2[Math.floor(Math.random() * parsedArray2.length)];
    document.links.innerHTML = random2;

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
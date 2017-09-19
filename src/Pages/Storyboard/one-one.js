import React, { Component } from 'react';
// import Filter from 'Filter';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const myArray = ['two-one', 'two-two', 'two-three', 'two-four', 'two-five'];

const allCharacters = gql`
    query allCharacters($character: String!) {
        allCharacters(filter: { chooseCharacter: $character }) {
            id
            chooseCharacter
            imageUrl
        }
    }
`;

class oneOne extends Component {

  render() {

    this.props.query({
      query: allCharacters,
      variables: {
        character: 'cat',
        imageUrl: '../sprites/cat/Walk (1).png'
      }
    });

    const random1 = myArray[Math.floor(Math.random() * myArray.length)];
    console.log(random1);

    let parsedArray = myArray.filter(
      function (dec) {
        return dec !== random1;
      })
    ;
    console.log(parsedArray);

    const random2 = parsedArray[Math.floor(Math.random() * parsedArray.length)];
    console.log(random2);

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

export default graphql(allCharacters)(oneOne);
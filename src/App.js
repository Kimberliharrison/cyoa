import React, { Component } from 'react';
import Routing from './Routing';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createCharacter = gql`
    mutation addCharacter($character: String!, $imageUrl: String!) {
        createCharacter(chooseCharacter: $character, imageUrl: $imageUrl) {
            id
            chooseCharacter
            imageUrl
        }
    }
`;

class App extends Component {

  render() {
    this.props.mutate({
      mutation: createCharacter,
      variables: {
        character: "dog",
        imageUrl: "../sprites/dog/Walk (1).png"
      }
    });

    return (
      <main>
        <Routing />
      </main>
    );
  };
}

export default graphql(createCharacter)(App);

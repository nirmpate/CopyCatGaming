import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import CharacterCard from './CharacterCard';
import CreateCharacter from './CreateCharacter';

const CHARACTERS_QUERY = gql`
  query {
	characters {
      id
      name
      level
      weapon {
        id
        element
        damageMax
        damageMin
        strength
        elementDamage
        weaponType {
          id
          name
          aps
          damageRange
        }
      }
    }
  }
`;

// Below Character query in src/components/Characters.js
class Characters extends Component {
    updateCharacters = (cache, { data: { createCharacter } }) => {
      const { characters } = cache.readQuery({ query: CHARACTERS_QUERY });
      cache.writeQuery({
        query: CHARACTERS_QUERY,
        data: { characters: characters.concat([createCharacter.character]) },
      });
    }

    render() {
      return (
        <Query query={CHARACTERS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching..</div>
            if (error) return <div>Error!</div>

            return (
                <div className="flex flex-wrap mb-4">
                <Fragment>

                  {data.characters.map((Character) => {
                      return (
                        <div 
                          key={Character.id}
                          className="m-4 w-1/4 rounded overflow-hidden shadow-lg cursor-pointer"
                          onClick={this.props.selectCharacter.bind(this, Character)} >
                          <CharacterCard character={ Character }/>

                      </div>
                      )
                  })}

                  <div className="m-4 w-full flex-grow w-auto rounded overflow-hidden shadow-lg">
                    <CreateCharacter onCreateCharacter={this.updateCharacters} />
                  </div>
                </Fragment>
                </div>
            )
          }}
        </Query>
      )
    }
  }
  export default Characters;
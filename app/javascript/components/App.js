import React, { Component } from 'react';
import Character from './Character';
import Characters from './Characters';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

class App extends Component {
  csrfToken = document.querySelector('[name="csrf-token"]').getAttribute('content');

  link = createHttpLink({
    uri: '/graphql',
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": this.csrfToken
    }
  });
  
  client = new ApolloClient({
    link: this.link,
    cache: new InMemoryCache()
  });


  state = {
    selectedCharacter: null
  }

  ATTACKS_QUERY = gql`
    query {
      attacks {
        name
        apsMultiplier
        dmgMultiplier
        element
      }
    }
  `;

  selectCharacter = (character) => {
    this.setState({selectedCharacter: character})
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
      <div className="container mx-auto my-8">
        <h1 className="font-bold text-xl m-4">Characters</h1>
      </div>
      <div className="container mx-auto">
              {this.state.selectedCharacter ?
                <Query query={this.ATTACKS_QUERY}>
                  {({ loading, error, data }) => {
                   if (loading) return <div>Fetching..</div>
                   if (error) return <div>Error!</div>
       
                   return (<Character attacks={data.attacks} character={this.state.selectedCharacter} selectCharacter={this.selectCharacter} />)
                  
                  }}
                </Query>
                 :
                <Characters selectCharacter={(character) => this.selectCharacter(character)} />}
            </div>
      </ApolloProvider>
    )
  }
}

export default App;

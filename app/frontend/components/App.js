import React, { Component } from 'react';
import Character from '../../javascript/components/Character';
import Characters from '../../javascript/components/Characters';

import './App.css';

class App extends Component {

  state = {
    selectedCharacter: null
  }

  selectCharacter = (character) => {
    console.log(this)
    console.log(character)
    this.setState({selectedCharacter: character})
  }

  render() {
    return (
      <div className="container mx-auto px-4">
        {this.state.selectedUser ?
          <Character character={this.state.selectedCharacter} selectCharacter={this.selectCharacter} /> :
          <Characters selectCharacter={(character) => this.selectCharacter(character)} />}
      </div>
    )
  }
}

export default App;

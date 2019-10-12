import React, { Component } from 'react';
import {
  AbilityScores,
  CharacterDetails,
  Traits,
  Footer,
  ExportButton,
} from './Components';
import './index.css';
import { weapons } from './data/gear';
import { generateCharacter } from './utils/utils';

class App extends Component {
  constructor() {
    super();
    this.state = generateCharacter();
  }

  addWeapon = num => {
    this.setState({
      weapon: weapons[num],
    });
  };

  render() {
    return (
      <div className='main-container flex column'>
        <div className='main-padding flex column'>
          <h1 className='box'>Knave</h1>
          <Traits character={this.state} />
          <AbilityScores character={this.state} />
          <CharacterDetails
            weaponUpdate={this.addWeapon}
            character={this.state}
          />
          <ExportButton character={this.state} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;

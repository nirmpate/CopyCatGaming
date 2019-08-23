
import React, { Fragment } from 'react';

const CharacterCard = ({ character }) => (
  <Fragment>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{character.name}</div>
      <p className="text-grey-darker text-md">Level: {character.level}</p>
    </div>
  </Fragment>
)
export default CharacterCard;
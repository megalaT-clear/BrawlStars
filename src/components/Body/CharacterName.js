import React from 'react';

const CharacterName = ({ data: { character }}) =>
	<div className="characterName">{character.name}</div>;

export default CharacterName;

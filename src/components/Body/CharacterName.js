import React from 'react';

const CharacterName = ({ data: { character }}) =>
	<div className="namePower">{character.name}</div>;

export default CharacterName;

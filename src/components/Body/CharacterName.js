import React from 'react';

const CharacterName = ({ data: { brawlStar }}) =>
	<div className="characterName">{brawlStar.name}</div>;

export default CharacterName;

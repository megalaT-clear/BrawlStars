import React from 'react';
import Power from './Power';
import CharacterName from './CharacterName';
import PowerUpgrade from './PowerUpgrade';

const Body = (context) =>
	<div className="body">
		<CharacterName { ...context }/>
		<PowerUpgrade { ...context }/>
		<Power { ...context }/>
	</div>;

export default Body;

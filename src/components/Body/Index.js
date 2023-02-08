import React from 'react';
import Power from './Power';
import CharacterName from './CharacterName';

const Body = (context) =>
	<div className="bodyStyle">
		<CharacterName { ...context }/>
		<Power { ...context }/>
	</div>;

export default Body;

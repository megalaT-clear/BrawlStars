import React from 'react';

const Level = ({ data: { character }}) =>
	<div>
		<img
			style={ { borderRadius: '50%' } }
			src="./img/hexagon.jpeg"
			alt="noImage"
			width="43px"
			height="40px"
		/>
		<label className="level">{character.powerLevel}</label>
	</div>;

export default Level;

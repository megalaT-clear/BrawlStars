import React from 'react';

const Rank = ({ data: { character }}) =>
	<div>
		<img
			style={ { borderRadius: '50%' } }
			src="./img/hexagon.jpeg"
			alt="noImage"
			width="43px"
			height="40px"
		/>
		<label className="level">{character.rank}</label>
	</div>;

export default Rank;

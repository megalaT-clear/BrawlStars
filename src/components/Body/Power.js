import React from 'react';

const Power = ({ data: { character }}) =>
	<div className="power">
		<label className="PowerText">POWER</label>
		<span className="powerBox">
			<label className="rank">{character.rank}</label>
		</span>
	</div>;

export default Power;

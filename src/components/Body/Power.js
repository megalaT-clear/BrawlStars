import React from 'react';

const Power = ({ data: { brawlStar }}) =>
	<div className="power">
		<label className="PowerText">POWER</label>
		<span className="powerBox">
			<label className="powerLevel">{brawlStar.powerLevel}</label>
		</span>
	</div>;

export default Power;

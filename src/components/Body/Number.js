import React from 'react';

const Number = ({ data: { character }}) =>
	<span className="powerBox">
		<label className="rank">{character.rank}</label>
	</span>;

export default Number;

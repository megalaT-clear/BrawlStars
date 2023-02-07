import React from 'react';

const Trophies = ({ data: { character }}) =>
	<div className="trophiesBar">
		<span className="trophiesImg">
			<img
				src="./img/trophies.jpeg"
				alt="noImage"
				width="24px"
				height="20px"
			/>
			<label className="trophiesCount">{character.trophies}</label>
		</span>
	</div>;

export default Trophies;

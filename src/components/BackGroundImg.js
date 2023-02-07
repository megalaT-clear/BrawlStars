import React from 'react';

const BackGroundImg = ({ data: { character }}) =>
	<div>
		<img
			src={ character.image }
			alt="noImage"
			width="236px"
			height="170px"
			border="2px solid black"
		/>
	</div>;

export default BackGroundImg;

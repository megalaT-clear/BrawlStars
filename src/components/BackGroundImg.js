import React from 'react';

const BackGroundImg = ({ data: { character }}) =>
	<div>
		<img
			className="img"
			src={ character.image }
			alt="noImage"
			width="186px"
			height="140px"
		/>
	</div>;

export default BackGroundImg;

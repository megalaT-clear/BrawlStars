import React from 'react';

const BrawlersImage = ({ data: { character }}) =>
	<div>
		<img
			className="img"
			src={ character.image }
			alt="noImage"
			width="100%"
			height="100%"
		/>
	</div>;

export default BrawlersImage;
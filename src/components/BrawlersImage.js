import React from 'react';

const BrawlersImage = ({ data: { brawlStar }}) =>
	<div>
		<img
			className="brawlersImage"
			src={ brawlStar.image }
			alt="noImage"
			width="100%"
			height="100%"
		/>
	</div>;

export default BrawlersImage;

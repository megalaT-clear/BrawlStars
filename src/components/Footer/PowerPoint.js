import React from 'react';

const PowerPoint = ({ data: { brawlStar }}) =>
	<div className="powerPoint">
		<img
			style={ {
				borderRadius: '50%',
			} }
			src="/img/powerPoint.jpeg"
			alt="noImage"
			width="30px"
			height="30px"
		/>
		<label className="powerPointsNumber">{brawlStar.powerPoints}</label>
	</div>;

export default PowerPoint;

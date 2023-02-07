import React from 'react';

const PowerPoint = ({ data: { character }}) =>
	<div className="powerPointStyle">
		<img
			style={ {
				borderRadius: '50%',
			} }
			src="/img/powerPoint.jpeg"
			alt="noImage"
			width="30px"
			height="30px"
		/>
		<label className="powerPointsNumber">{character.powerPoints}</label>
	</div>;

export default PowerPoint;

/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
import React from 'react';
import BackGroundImg from './BackGroundImg';
import Header from './Header/Index';
import Body from './Body/Index';
import Rectangle from './Footer/Index';

const squareMultiplier = 150;
const squareAdd = 100;

const Square = (context) => {
	const { config: { size }} = context;
	const { data: { Key }} = context;

	return (
		<div>
			<div
				className="square"
				style={ {
					top: (Math.floor(Key / 3) * 300) + 130,
					left: ((((Key % 3) * squareMultiplier) + squareAdd) * size) + 200,
					height: 105 * size,
					width: 120 * size,
				} }
			>
				<BackGroundImg { ...context }/>
				<Header { ...context }/>
				<Body { ...context }/>
				<Rectangle { ...context }/>
			</div>
		</div>

	);
};

export default Square;

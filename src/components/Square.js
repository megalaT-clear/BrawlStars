/* eslint-disable no-magic-numbers */
import React from 'react';
import BackGroundImg from './BackGroundImg';
import Header from './Header/Index';
import Body from './Body/Index';
import Rectangle from './Footer/Index';

const squareMultiplier = 150;
const squareAdd = 100;

const Square = (context) => {
	const { data: { Key }} = context;
	const size = 2;

	return (
		<div
			className="square"
			style={ {
				top: 50 * size,
				left: ((Key * squareMultiplier) + squareAdd) * size,
				height: 120 * size,
				width: 120 * size,
			} }
		>
			<BackGroundImg { ...context }/>
			<Header { ...context }/>
			<Body { ...context }/>
			<Rectangle { ...context }/>
		</div>

	);
};

export default Square;

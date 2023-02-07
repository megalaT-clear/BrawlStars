/* eslint-disable max-lines-per-function */
import React from 'react';
import Coin from './Coin';
import PowerPoint from './PowerPoint';

const Rectangle = (context) =>
	<div className="footerStyle">
		<Coin { ...context }/>
		<PowerPoint { ...context }/>
		<label className="plusSymbol">+</label>
	</div>;

export default Rectangle;

import React from 'react';
import BrawlCoin from './BrawlCoin';
import PowerPoint from './PowerPoint';

const Footer = (context) =>
	<div className="footer">
		<BrawlCoin { ...context }/>
		<PowerPoint { ...context }/>
		<label className="plusSymbol">+</label>
	</div>;

export default Footer;

import React from 'react';
import BrawlersImage from './BrawlersImage';
import Header from './Header/Index';
import Body from './Body/Index';
import Footer from './Footer/Index';
import sorting from '../services/sorting';

const Characters = (context) =>
	<div
		className="square"
		style={ sorting.getSquare(context) }
	>
		<BrawlersImage { ...context }/>
		<Header { ...context }/>
		<Body { ...context }/>
		<Footer { ...context }/>
	</div>;

export default Characters;

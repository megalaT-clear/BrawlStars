import React from 'react';

const BrawlersCount = ({ state: { brawlStars }}) =>
	<div className=" brawlersCount">
		BRAWLERS { brawlStars.length}/64
	</div>;

export default BrawlersCount;

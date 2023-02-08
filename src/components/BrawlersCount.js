import React from 'react';

const BrawlersCount = ({ state: { characterDetails }}) =>
	<div className="titleStyle">
		BRAWLERS { characterDetails.length}/64
	</div>;

export default BrawlersCount;

import React from 'react';
import Characters from './Characters';

const Container = (context) => {
	const { state: { brawlStars }} = context;

	return brawlStars.map((brawlStar, Key) =>
		<div key={ Key }>
			<Characters { ...{ ...context, data: { brawlStar, Key }} }/>
		</div>);
};

export default Container;

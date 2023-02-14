import React from 'react';
import Characters from '../Characters';

const Container = (context) => {
	const { state: { brawlStars }} = context;

	return brawlStars.map((brawlStar, Key) =>

		<Characters
			Key={ Key }
			{ ...{ ...context, data: { brawlStar, Key }} }
		/>);
};

export default Container;

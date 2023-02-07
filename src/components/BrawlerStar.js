import React from 'react';
import Square from './Square';

const BrawlerStar = (context) => {
	const { state: { characterDetails }} = context;

	return characterDetails.map((character, Key) =>
		<div key={ Key }>
			<Square { ...{ ...context, data: { character, Key }} }/>
		</div>);
};

export default BrawlerStar;

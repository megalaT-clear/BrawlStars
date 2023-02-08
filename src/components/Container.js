import React from 'react';
import Characters from './Characters';

const Container = (context) => {
	const { state: { characterDetails }} = context;

	return characterDetails.map((character, Key) =>
		<div key={ Key }>
			<Characters { ...{ ...context, data: { character, Key }} }/>
		</div>);
};

export default Container;

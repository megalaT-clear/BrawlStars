import { peek } from '@laufire/utils/debug';
import React from 'react';

const Button = (context) => {
	const { state, setState } = context;
	const { buttonIndex, sortModes } = state;
	const { config: { items }} = context;

	return (
		<button
			onClick={ () => setState({
				...state,
				buttonIndex: peek(buttonIndex) + 1,
				sortModes: items[buttonIndex % items.length],

			}) }
		>{sortModes}</button>);
};

export default Button;

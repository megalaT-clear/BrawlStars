/* eslint-disable max-lines-per-function */
import { peek } from '@laufire/utils/debug';
import React from 'react';
import sorting from '../services/sorting';

const Button = (context) => {
	const { state, setState } = context;
	const { buttonIndex, sortModes, characterDetails } = state;
	const { config: { items }} = context;

	const types = {
		'least Trophies': (characterDetail) =>
			sorting.leastTrophies(characterDetail),
		'most Trophies': (characterDetail) =>
			sorting.mostTrophies(characterDetail),
		'power Level': (characterDetail) =>
			sorting.powerLevel(characterDetail),
		'by Rarity': (characterDetail) =>
			sorting.byRarity(characterDetail, context),
		'by Rarity Descending': (characterDetail) =>
			sorting.byRarityDescending(characterDetail, context),
		'closest To Next Rank': (characterDetail) =>
			sorting.closestToNextRank(characterDetail, context),
	};

	return (
		<button
			className="buttonStyle"
			onClick={ () => setState({
				...state,
				buttonIndex: peek(buttonIndex) + 1,
				sortModes: items[buttonIndex % items.length],
				characterDetails: types[sortModes](characterDetails, context),
			}) }
		>{sortModes}
		</button>);
};

export default Button;

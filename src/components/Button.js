/* eslint-disable max-lines-per-function */
import { peek } from '@laufire/utils/debug';
import React from 'react';
import sortingManager from '../services/sortingManager';

const Button = (context) => {
	const { state, setState } = context;
	const { buttonIndex, sortModes, characterDetails } = state;
	const { config: { items }} = context;

	const types = {
		'least Trophies': (characterDetail) =>
			sortingManager.leastTrophies(characterDetail),
		'most Trophies': (characterDetail) =>
			sortingManager.mostTrophies(characterDetail),
		'power Level': (characterDetail) =>
			sortingManager.powerLevel(characterDetail),
		'by Rarity': (characterDetail) =>
			sortingManager.byRarity(characterDetail, context),
		'by Rarity Descending': (characterDetail) =>
			sortingManager.byRarityDescending(characterDetail, context),
		'closest To Next Rank': (characterDetail) =>
			sortingManager.closestToNextRank(characterDetail, context),
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

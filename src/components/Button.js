import { peek } from '@laufire/utils/debug';
import React from 'react';
import sortingManager from '../services/sortingManager';

const types = {
	'least Trophies': (context) =>
		sortingManager.leastTrophies(context),
	'most Trophies': (context) =>
		sortingManager.mostTrophies(context),
	'power Level': (context) =>
		sortingManager.powerLevel(context),
	'by Rarity': (context) =>
		sortingManager.byRarity(context),
	'by Rarity Descending': (context) =>
		sortingManager.byRarityDescending(context),
	'closest To Next Rank': (context) =>
		sortingManager.closestToNextRank(context),
};

const Button = (context) => {
	const { state, setState } = context;
	const { buttonIndex, sortModes } = state;
	const { config: { items }} = context;

	return (
		<button
			className="button"
			onClick={ () => setState({
				...state,
				buttonIndex: peek(buttonIndex) + 1,
				sortModes: items[buttonIndex % items.length],
				brawlStars: types[sortModes](context),
			}) }
		>{sortModes}
		</button>);
};

export default Button;

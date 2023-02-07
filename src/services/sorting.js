/* eslint-disable no-magic-numbers */

import { rndBetween } from '@laufire/utils/lib';

const getCharacters = (characters) =>
	characters.map((character) => ({ ...character,
		powerLevel: rndBetween(1, 10),
		powerPoints: rndBetween(1, 500),
		coins: rndBetween(1, 500) }));

const squareMultiplier = 85;
const squareAdd = 400;

const leastTrophies = (characters) =>
	characters.sort((a, b) => a.trophies - b.trophies);

const mostTrophies = (characters) =>
	characters.sort((a, b) => b.trophies - a.trophies);

const powerLevel = (characters) =>
	characters.sort((a, b) => b.powerLevel - a.powerLevel);

const byRarityDescending = (characters, context) => {
	const { config: { Rarity }} = context;

	return characters.sort((a, b) => Rarity[a.type] - Rarity[b.type]);
};

const byRarity = (characters, context) => {
	const { config: { Rarity }} = context;

	return characters.sort((a, b) => Rarity[b.type] - Rarity[a.type]);
};

const closestToNextRank = (characters, context) => {
	const { config: { trophies }} = context;

	return characters.sort((a, b) =>
		(trophies[a.rank] - a.trophies) - (trophies[b.rank] - b.trophies));
};

const size = 2;

const getBoxes = ({ state: { characterDetails }}) =>
	characterDetails.map((window) => (
		{
			size: 70 * size,
			x: ((window * squareMultiplier) + squareAdd) * size,
			y: 58 * size,
			border: 4 * size,
			borderRadius: 10 * size,
		}
	));

const sorting = {
	byRarity,
	byRarityDescending,
	leastTrophies,
	mostTrophies,
	powerLevel,
	closestToNextRank,
	getBoxes,
	getCharacters,
};

export default sorting;

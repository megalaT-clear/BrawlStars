/* eslint-disable no-magic-numbers */

import { rndBetween } from '@laufire/utils/lib';

const squareMultiplier = 150;
const squareAdd = 100;

const getSquare = (context) => {
	const { config: { size }} = context;
	const { data: { Key }} = context;

	return { top: (Math.floor(Key / 3) * 300) + 130,
		left: ((((Key % 3) * squareMultiplier) + squareAdd) * size) + 200,
		height: 105 * size,
		width: 120 * size };
};

const getCharacters = (characters) =>
	characters.map((character) => ({ ...character,
		powerLevel: rndBetween(1, 10),
		powerPoints: rndBetween(1, 500),
		coins: rndBetween(1, 500) }));

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

const sorting = {
	byRarity,
	byRarityDescending,
	leastTrophies,
	mostTrophies,
	powerLevel,
	closestToNextRank,
	getCharacters,
	getSquare,
};

export default sorting;

/* eslint-disable no-magic-numbers */

import { rndBetween } from '@laufire/utils/lib';

const squareMultiplier = 150;
const squareAdd = 100;

const getSquare = (context) => {
	const { config: { size }} = context;
	const { data: { Key }} = context;

	return { top: (Math.floor(Key / 3) * 300) + 130,
		left: ((((Key % 3) * squareMultiplier) + squareAdd) * size) + 200,
		height: 233,
		width: 238 };
};

const getPower = (context) => {
	const { setState, config: { timeDelay }} = context;

	return setInterval(() => setState((prevState) => ({
		...prevState,
		powerUpgrade: !prevState.powerUpgrade,
	})), timeDelay);
};

const getCharacters = (characters) =>
	characters.map((character) => ({ ...character,
		powerLevel: rndBetween(1, 10),
		powerPoints: rndBetween(1, 500),
		coins: rndBetween(1, 500) }));

const leastTrophies = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => a.trophies - b.trophies);

const mostTrophies = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => b.trophies - a.trophies);

const powerLevel = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => b.powerLevel - a.powerLevel);

const byRarityDescending = (context) => {
	const { config: { Rarity }, state: { brawlStars }} = context;

	return brawlStars.sort((a, b) => Rarity[a.type] - Rarity[b.type]);
};

const byRarity = (context) => {
	const { config: { Rarity }, state: { brawlStars }} = context;

	return brawlStars.sort((a, b) => Rarity[b.type] - Rarity[a.type]);
};

const closestToNextRank = (context) => {
	const { config: { trophies }, state: { brawlStars }} = context;

	return brawlStars.sort((a, b) =>
		(trophies[a.rank] - a.trophies) - (trophies[b.rank] - b.trophies));
};

const sortingManagerManager = {
	byRarity,
	byRarityDescending,
	leastTrophies,
	mostTrophies,
	powerLevel,
	closestToNextRank,
	getCharacters,
	getSquare,
	getPower,
};

export default sortingManagerManager;


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
};

export default sorting;

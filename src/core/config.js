/* eslint-disable no-magic-numbers */
const config = {
	items: [
		'by Rarity',
		'by Rarity Descending',
		'most Trophies',
		'least Trophies',
		'power Level',
		'closest To Next Rank',
	],

	headers: [
		'name',
		'powerLevel',
		'powerPoints',
		'coins',
		'type',
		'rank',
		'trophies',
		'image',
	],

	Rarity: {
		Rare: 3,
		SuperRare: 2,
		Mythic: 1,
	},

	trophies: [null, 10, 20, 30, 50, 60, 80, 100],
};

export default config;

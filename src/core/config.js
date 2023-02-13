/* eslint-disable no-magic-numbers */
const config = {
	timeDelay: 1000,
	size: 2,
	characters: [
		{
			name: 'SHELLY',
			type: 'StartingBrawler',
			rank: 3,
			trophies: 22,
			image: '/img/shelly.jpeg',
		},
		{
			name: 'TARA',
			type: 'Mythic',
			rank: 2,
			trophies: 10,
			image: '/img/tara.jpeg',
		},
		{
			name: 'Bo',
			type: 'Epic',
			rank: 5,
			trophies: 44,
			image: '/img/Bo.jpeg',
		},
		{
			name: 'BARLEY',
			type: 'Rare',
			rank: 6,
			trophies: 80,
			image: '/img/barley.jpeg',
		},
		{
			name: 'ELPRIMO',
			type: 'Rare',
			rank: 7,
			trophies: 61,
			image: '/img/ElPrimo.jpeg',
		},
		{
			name: 'COLT',
			type: 'Rare',
			rank: 5,
			trophies: 50,
			image: '/img/colt.jpeg',
		},
	],

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
		StartingBrawler: 7,
		Rare: 6,
		SuperRare: 5,
		Epic: 4,
		Mythic: 3,
		Legendary: 2,
		Chromatic: 1,
	},

	trophies: [null, 10, 20, 30, 50, 60, 80, 100],
};

export default config;

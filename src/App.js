import { React, useState } from 'react';
import './App.scss';
import Button from './components/Button';
import Container from './components/Container';
import sortingManager from './services/sortingManager';
import BrawlersCount from './components/BrawlersCount';

const getInitialState = ({ config: { characters }}) => ({
	buttonIndex: 1,
	sortModes: 'by Rarity',
	brawlStars: sortingManager.getCharacters(characters),
	powerUpgrade: false,
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };
	const { once } = context;

	once(() => sortingManager.getPower(extendedContext));

	return (
		<div className="App">
			<BrawlersCount { ...extendedContext }/>
			<Button { ...extendedContext }/>
			<Container { ...extendedContext }/>
		</div>);
};

export default App;

import { React, useState } from 'react';
import './App.scss';
import Button from './components/Button';
import Container from './components/Container';
import sortingManager from './services/sortingManager';
import BrawlersCount from './components/BrawlersCount';

const getInitialState = ({ config: { characters }}) => ({
	buttonIndex: 1,
	sortModes: 'by Rarity',
	characterDetails: sortingManager.getCharacters(characters),
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return (
		<div
			className="App"
			style={ {
				backgroundImage: 'url(\'/img/backGround.jpeg\')',
			} }
		>
			<BrawlersCount { ...extendedContext }/>
			<Button { ...extendedContext }/>
			<Container { ...extendedContext }/>
		</div>);
};

export default App;

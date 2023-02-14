import { React, useState } from 'react';
import './App.scss';
import sortingManager from './services/sortingManager';
import ScreenHeader from './components/ScreenHeader/Index';
import ScreenBody from './components/ScreenBody/Index';

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
			<ScreenHeader { ...extendedContext }/>
			<ScreenBody { ...extendedContext }/>
		</div>);
};

export default App;

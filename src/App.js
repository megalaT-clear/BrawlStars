import { React, useState } from 'react';
import './App.scss';
import Button from './components/Button';
import Container from './components/Container';

import sorting from './services/sorting';
import BrawlersCount from './components/BrawlersCount';

const getInitialState = ({ config: { characters }}) => ({
	buttonIndex: 1,
	sortModes: 'by Rarity',
	characterDetails: sorting.getCharacters(characters),
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return (
		<div
			style={ {
				backgroundImage: 'url(\'/img/backGround.jpeg\')',
				backgroundRepeat: 'no-repeat',
				height: '100vh',
				width: '100vW',
				backgroundSize: 'cover',
			} }
		>
			<BrawlersCount { ...extendedContext }/>
			<Button { ...extendedContext }/>
			<Container { ...extendedContext }/>
		</div>);
};

export default App;

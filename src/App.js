import { React, useState } from 'react';
import './App.scss';
import Button from './components/Button';
import BrawlerStar from './components/BrawlerStar';

import characters from './services/characters';

const getInitialState = () => ({
	buttonIndex: 1,
	sortModes: 'by Rarity',
	characterDetails: characters,
});

const App = (context) => {
	const [state, setState] = useState(getInitialState());
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Button { ...extendedContext }/>
		<BrawlerStar { ...extendedContext }/>
	</div>;
};

export default App;

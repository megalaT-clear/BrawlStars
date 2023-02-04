import { React, useState } from 'react';
import './App.scss';
import BrawlersTable from './components/BrawlersTable';
import Button from './components/Button';
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
		<BrawlersTable { ...extendedContext }/>
	</div>;
};

export default App;

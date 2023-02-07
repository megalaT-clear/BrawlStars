import { React, useState } from 'react';
import './App.scss';
import Button from './components/Button';
import BrawlerStar from './components/BrawlerStar';

import sorting from './services/sorting';

const getInitialState = ({ config: { characters }}) => ({
	buttonIndex: 1,
	sortModes: 'by Rarity',
	characterDetails: sorting.getCharacters(characters),
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return <div>
		<Button { ...extendedContext }/>
		<BrawlerStar { ...extendedContext }/>
	</div>;
};

export default App;

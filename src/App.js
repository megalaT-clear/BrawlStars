import { React, useState } from 'react';
import './App.scss';
import Button from './components/Button';

const getInitialState = () => ({
	buttonIndex: 1,
	sortModes: 'By Rarity',
});

const App = (context) => {
	const [state, setState] = useState(getInitialState());
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Button { ...extendedContext }/>
	</div>;
};

export default App;

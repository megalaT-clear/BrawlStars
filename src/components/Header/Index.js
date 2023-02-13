import React from 'react';
import Rank from './Rank';
import Trophies from './Trophies';

const Header = (context) =>
	<div className="header">
		<Rank { ...context }/>
		<Trophies { ...context }/>
	</div>;

export default Header;

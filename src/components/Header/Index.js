import React from 'react';
import Rank from './Level';
import Trophies from './Trophies';

const Header = (context) =>
	<div className="header">
		<Trophies { ...context }/>
		<Rank { ...context }/>
	</div>;

export default Header;

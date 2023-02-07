import React from 'react';
import Level from './Level';
import Trophies from './Trophies';

const Header = (context) =>
	<div className="header">
		<Level { ...context }/>
		<Trophies { ...context }/>
	</div>;

export default Header;

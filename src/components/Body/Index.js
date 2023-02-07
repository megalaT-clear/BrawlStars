import React from 'react';
import Power from './Power';
import Name from './Name';

const Body = (context) =>
	<div className="bodyStyle">
		<Name { ...context }/>
		<Power { ...context }/>
	</div>;

export default Body;

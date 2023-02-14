import React from 'react';
import Container from './Container';

const ScreenBody = (context) =>
	<div className="container">
		<Container { ...context }/>
	</div>;

export default ScreenBody;

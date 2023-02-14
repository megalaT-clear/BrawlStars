import React from 'react';
import Container from './Container';

const ScreenBody = (context) =>
	<div className="screenBody">
		<div className="container">
			<Container { ...context }/>
		</div>
	</div>;

export default ScreenBody;

import React from 'react';
import BrawlersCount from '../BrawlersCount';
import Button from './Button';

const ScreenHeader = (context) =>
	<div>
		<BrawlersCount { ...context }/>
		<Button { ...context }/>;
	</div>;

export default ScreenHeader;

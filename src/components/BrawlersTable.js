import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const BrawlersTable = (context) =>
	<div>
		<table className="headerStyle">
			<thead>
				<TableHeader { ...context }/>
			</thead>
			<tbody>
				<TableBody { ...context }/>
			</tbody>
		</table>
	</div>;

export default BrawlersTable;

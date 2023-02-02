import React from 'react';
import TableCell from './TableCell';

const TableBody = (context) => {
	const { state: { characterDetails }} = context;

	return characterDetails.map((characterDetail, index) =>
		<tr key={ index }>
			<TableCell { ...{ ...context, data: { characterDetail }} }/>
		</tr>);
};

export default TableBody;

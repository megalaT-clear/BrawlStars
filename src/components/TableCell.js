import React from 'react';

const TableCell = (context) => {
	const { config: { headers }, data: { characterDetail }} = context;

	return headers.map((header, key) =>
		<td
			key={ key }
			className="headerStyle"
		>
			{characterDetail[header]}
		</td>);
};

export default TableCell;

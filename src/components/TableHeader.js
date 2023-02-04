import React from 'react';

const TableHeader = (context) => {
	const { config: { headers }} = context;

	return headers.map((header, index) =>
		<th key={ index } className="tableStyle">{header}</th>);
};

export default TableHeader;

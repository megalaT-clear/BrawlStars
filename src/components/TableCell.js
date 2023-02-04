import React from 'react';

const TableCell = (context) => {
	const { config: { headers }, data: { characterDetail }} = context;

	return headers.map((header, key) =>
		<td
			key={ key }
			className="tableStyle"
		>
			{characterDetail[header] === characterDetail.image
				? <td>
					<img
						src={ characterDetail.image }
						alt="noImage"
						width="100px"
						height="100px"
					/>
				</td>
				: characterDetail[header]}
		</td>);
};

export default TableCell;

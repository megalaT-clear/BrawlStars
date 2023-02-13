import React from 'react';

const Rank = (context) => {
	const { data: { brawlStar }} = context;

	return (
		<div>
			<img
				style={ { borderRadius: '70%' } }
				src="./img/hexagon.jpeg"
				alt="noImage"
				width="43px"
				height="40px"
			/>
			<label className="rank">{brawlStar.rank}</label>
		</div>
	);
};

export default Rank;

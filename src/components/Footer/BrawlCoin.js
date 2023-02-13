import React from 'react';

const BrawlCoin = ({ data: { brawlStar }}) =>
	<div className="brawlCoin">
		<img
			style={ {
				borderRadius: '50%',
			} }
			src="/img/coins.jpeg"
			alt="noImage"
			width="30px"
			height="30px"
		/>
		<label className="brawlCoinNumber">{brawlStar.coins}</label>
	</div>;

export default BrawlCoin;

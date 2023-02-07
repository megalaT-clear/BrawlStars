import React from 'react';

const Coin = ({ data: { character }}) =>
	<div className="coinStyle">
		<img
			style={ {
				borderRadius: '50%',
			} }
			src="/img/coins.jpeg"
			alt="noImage"
			width="30px"
			height="30px"
		/>
		<label className="coinsNumber">{character.coins}</label>
	</div>;

export default Coin;

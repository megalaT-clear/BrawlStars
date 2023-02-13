import React from 'react';

const PowerUpgrade = (context) => {
	const { state: { powerUpgrade }} = context;

	return <div>
		<img
			className={ powerUpgrade ? 'upgradeDown' : 'upgradeUp' }
			style={ { borderRadius: '70%' } }
			src="./img/powerUpgrade.jpeg"
			alt="noImage"
			width="28px"
			height="28px"
		/>
	</div>;
};

export default PowerUpgrade;

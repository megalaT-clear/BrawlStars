import React from 'react';

const Trophies = ({ data: { brawlStar }}) =>
	<div className="trophies">
		<div
			className="trophiesBar"
			style={ { width: `${ brawlStar.trophies }px`,
				color: 'gold' } }
		>
			<span className="trophiesImage">
				<img
					style={ { borderRadius: '30%' } }
					src="./img/trophies.jpeg"
					alt="noImage"
					width="24px"
					height="20px"
				/>
				<label className="trophiesCount">{brawlStar.trophies}</label>
			</span>
		</div>
	</div>;

export default Trophies;

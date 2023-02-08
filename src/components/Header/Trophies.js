/* eslint-disable max-lines-per-function */
import React from 'react';

const Trophies = ({ data: { character }}) =>
	<div className="trophiesBar">
		<div
			className="bar"
			style={ { width: `${ character.trophies }px`,
				color: 'gold' } }
		>
			<span className="trophiesImg">
				<img
					style={ {
						borderRadius: '30%',
					} }
					src="./img/trophies.jpeg"
					alt="noImage"
					width="24px"
					height="20px"
				/>
				<label className="trophiesCount">{character.trophies}</label>
			</span>
		</div>
	</div>;

export default Trophies;

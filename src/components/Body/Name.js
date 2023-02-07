import React from 'react';

const Name = ({ data: { character }}) =>
	<div className="namePower">{character.name}</div>;

export default Name;

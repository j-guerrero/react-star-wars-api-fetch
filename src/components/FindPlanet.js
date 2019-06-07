import React from 'react';

export const FindPlanet = ({ handleClick }) => {
	return (
		<div>
			<button type="button" onClick={handleClick} id="FindPlanetButton">Find Random Planet</button>
		</div>
	)
}

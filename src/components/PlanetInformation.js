import React from 'react'

const PlanetInformation = ({ planetInfo }) => {
	return(
		<div class="PlanetInformation">
		<h1> Name:&nbsp;&nbsp;{planetInfo.name} </h1>
		<p> Climate:&nbsp;&nbsp;{planetInfo.climate}</p>
		<p>	Population:&nbsp;&nbsp;{planetInfo.population}</p>
		<p> Diameter:&nbsp;&nbsp;{planetInfo.diameter}</p>
		<p> Rotation Period:&nbsp;&nbsp;{planetInfo.rotation_period}</p>
		</div>
	)
}

export default PlanetInformation
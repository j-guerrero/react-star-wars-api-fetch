import React, { Component } from 'react';
import './App.css';
import { FindPlanet,fetchPlanet } from '../components/FindPlanet.js'
import PlanetInformation from '../components/PlanetInformation.js'


class App extends Component{

	constructor(props){
		super(props);

		this.state = {
			name: '',
			climate: '',
			population: '',
			diameter:'',
			rotation_period:''
		}

		this.handleClick = this.handleClick.bind(this); // needed to refresh window after each click
	};

	// fetch info from SWAPI on click
	async handleClick(){
		const randomNumber = ( Math.floor(Math.random() * 9) + 1);
		const response = await fetch('https://swapi.co/api/planets/' + randomNumber + "/");
		const data = await response.json();

		this.setState({ 
			name: data.name,
			climate: data.climate,
			population: data.population,
			diameter: data.diameter,
			rotation_period: data.rotation_period });
	}
	
	// fetch on load
	componentDidMount(){
		this.handleClick();
	}

	// MAIN
	render() {

		const planetInfo = this.state;

		return (
			<div>
				<h1 id="titleText">Star Wars API Planet Finder</h1>
				<PlanetInformation planetInfo = {planetInfo} />
				<FindPlanet handleClick={this.handleClick} />

			</div>
			);
		};
}

export default App;

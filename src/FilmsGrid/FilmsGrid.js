import React, {Component} from 'react';
import './FilmsGrid.css';

class FilmsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedFilmId: null, isCharactersShown: false, selectedHeroesId: null,
            characters: [], starships: [], planets: [], species: [], vehicles: []};
        this.chooseFilm = this.chooseFilm.bind(this);
        this.showCharacters = this.showCharacters.bind(this);
        this.showPlanets = this.showPlanets.bind(this);
        this.showSpecies = this.showSpecies.bind(this);
        this.showStarships = this.showStarships.bind(this);
        this.showVehicles = this.showVehicles.bind(this);

    }


    chooseFilm(id) {
        const axios = require('axios');
        this.setState({selectedFilmId: id});
        if (this.state.selectedFilmId !== id) {
            axios.get(`https://swapi.dev/api/films/${id}/`)
                .then((response) =>
                    response.data);
        } else {
            this.setState({selectedFilmId: null})
        }
    }
       showCharacters () {
           this.setState({isCharactersShown: true});
           const axios = require('axios');
               axios.get(`https://swapi.dev/api/people/`).then((response) => {
                   this.setState({characters: response.data.results});
               })
       }

       showPlanets () {
           const axios = require('axios');
           axios.get(`https://swapi.dev/api/planets/`).then((response) => {
               this.setState({planets: response.data.results});
           })
       }

       showStarships () {
        const axios = require('axios');
        axios.get(`https://swapi.dev/api/starships/`).then((response) => {
            this.setState({starships: response.data.results});
        })
    }
    showSpecies () {
        const axios = require('axios');
        axios.get(`https://swapi.dev/api/species/`).then((response) => {
            this.setState({species: response.data.results});
        })
    }

    showVehicles () {
        const axios = require('axios');
        axios.get(`https://swapi.dev/api/vehicles/`).then((response) => {
            this.setState({vehicles: response.data.results});
        })
    }

    render() {
        const mappingFilms = this.props.films.map((film) =>
            <li className='filmLi' key='film.episode_id' onClick={() => this.chooseFilm(film.episode_id)}>
                <span>{film.title}</span>
                {this.state.selectedFilmId === film.episode_id ? <div className='aboutFilm'>
                    <div className='allDetailsFilm'>
                        <div className='aboutFilm'><span className='filmDetails'>Director:</span>{film.director}</div>
                        <div><span className='filmDetails crawl'>Opening crawl:</span>{film.opening_crawl}</div>
                        <div><span className='filmDetails'>Producer:</span>{film.producer}</div>
                        <div><span className='filmDetails'>Release date:</span> {film.release_date}</div>
                        <span className='filmDetails'>Characters: </span>{film.characters.map(hero =>
                        <div key = {hero.id}  onClick={this.showCharacters}>{hero}</div>)}
                        <span className='filmDetails'>Planets: </span>{film.planets.map((planet) =>
                        <div onClick={this.showPlanets}>{planet}</div>)}
                        <span className='filmDetails'>Starships: </span>{film.starships.map((starship) =>
                        <div onClick={this.showStarships}>{starship}</div>)}
                        <span className='filmDetails'>Vehicles: </span>{film.vehicles.map((vehicle) =>
                        <div onClick={this.showVehicles}>{vehicle}</div>)}
                        <span className='filmDetails'>Species: </span>{film.species.map((specie) =>
                        <div onClick={this.showSpecies}>{specie}</div>)}
                    </div>
                </div> : null}

            </li>
        );


        return (
            <div className='wrapper'>
                <div className='filmsList'>{mappingFilms}
                </div>
            </div>
        )
    }
}

export default FilmsGrid;
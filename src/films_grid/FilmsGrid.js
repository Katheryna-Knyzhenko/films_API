import React, {Component} from 'react';
import './FilmsGrid.css';
import Planet from "../planet/Planet";
import Starship from "../starship/Starship";

class FilmsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFilmId: null,
            selectedPlanetId: null,
            selectedStarshipId: null,
            starship: {},
            planet: {},
        };
    }

    chooseFilm(id) {
        this.setState({selectedFilmId: id, selectedPlanetId: null, selectedStarshipId: null});
    }

    showPlanet(planetURL) {
        const axios = require('axios');
        axios.get(planetURL).then((response) => {
            this.setState({selectedPlanetId: planetURL, selectedStarshipId: null, planet: response.data});
        })
    }

    showStarship(starshipURL) {
        const axios = require('axios');
        axios.get(starshipURL).then((response) => {
            this.setState({selectedStarshipId: starshipURL, selectedPlanetId: null, starship: response.data});
        })
    }

    render() {
        const {films} = this.props;

        return (
            <div className='wrapper'>
                <div className='filmsList'>
                    {films.map((film) =>
                        <li className='filmLi' key={film.episode_id} onClick={() => this.chooseFilm(film.episode_id)}>
                            <span>{film.title}</span>
                            {this.state.selectedFilmId === film.episode_id && <div className='aboutFilm'>
                                <div className='allDetailsFilm'>
                                    <div className='aboutFilm'><span
                                        className='filmDetails'>Director:</span>{film.director}</div>
                                    <div><span className='filmDetails crawl'>Opening crawl:</span>{film.opening_crawl}
                                    </div>
                                    <div><span className='filmDetails'>Producer:</span>{film.producer}</div>
                                    <div><span className='filmDetails'>Release date:</span> {film.release_date}</div>


                                    <span className='filmDetails'>Planets: </span>
                                    {film.planets.map((planet) =>
                                        <div>
                                            <div key={planet} onClick={() => this.showPlanet(planet)}>{planet}</div>
                                            {this.state.selectedPlanetId === planet &&
                                            <Planet planet={this.state.planet}/>}
                                        </div>
                                    )}


                                    <span className='filmDetails'>Starships: </span>
                                    {film.starships.map((starship) =>
                                        <div>
                                            <div key={starship}
                                                 onClick={() => this.showStarship(starship)}>{starship}</div>
                                            {this.state.selectedStarshipId === starship &&
                                            <Starship starship={this.state.starship}/>}
                                        </div>
                                    )}
                                </div>
                            </div>}
                        </li>
                    )}
                </div>
            </div>
        )
    }
}

export default FilmsGrid;
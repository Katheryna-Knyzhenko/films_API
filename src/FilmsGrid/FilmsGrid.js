import React, {Component} from 'react';
import './FilmsGrid.css';

class FilmsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedFilmId: null};
        this.chooseFilm = this.chooseFilm.bind(this);

    }
    chooseFilm (id) {
        const axios = require('axios');
        this.setState({ selectedFilmId: id});
        if (this.state.selectedFilmId !== id) {
            axios.get(`https://swapi.dev/api/films/${id}/`)
                .then((response) =>
                    response.data);
            // axios.get(`https://swapi.dev/api/planets/${id}/`);
            // axios.get(`https://swapi.dev/api/species/${id}/`);
            // axios.get(`https://swapi.dev/api/starships/${id}/`);
            // axios.get(`https://swapi.dev/api/vehicles/${id}/`)


        } else {
            this.setState({selectedFilmId: null})
        }

    }




    render() {

        const mappingFilms = this.props.films.map((film) =>

            <li className='filmLi' key='film.episode_id' onClick={() => this.chooseFilm(film.episode_id)}><span>{film.title}</span>
                { this.state.selectedFilmId === film.episode_id ? <div className='aboutFilm'>
                    <div className='allDetailsFilm'>
                    <div className='aboutFilm'><span className='filmDetails'>Director:</span>{film.director}</div>
                    <div><span className='filmDetails crawl'>Opening crawl:</span>{film.opening_crawl}</div>
                    <div><span className='filmDetails'>Producer:</span>{film.producer}</div>
                    <div><span className='filmDetails'>Release date:</span> {film.release_date}</div>
                    {/*<div><span className='filmDetails'>Planets:</span> {film.planets}</div>*/}
                    {/*<div><span className='filmDetails'>Species:</span> {film.species}</div>*/}
                    {/*<div><span className='filmDetails'>Starships:</span> {film.starships}</div>*/}
                    {/*<div><span className='filmDetails'>Vehicles:</span> {film.vehicles}</div>*/}
                    </div></div> : null}

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
import React, {Component} from 'react';
import './FilmsGrid.css';

class FilmsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {isFilmChosen: false, selectedFilmId: null};
        this.chooseFilm = this.chooseFilm.bind(this);

    }
    chooseFilm (id) {
        const axios = require('axios');
        this.setState({isFilmChosen: true});
        if (this.state.isFilmChosen) {
            axios.get(`https://swapi.dev/api/films/${id}/`)
                .then((response) => response.data.detail);
            console.log('k')
        }
    }
    render() {
        const mappingFilms = this.props.films.map((film) =>

            <li className='filmLi' key='film.episode_id' onClick={() => this.chooseFilm(film.episode_id)}>{film.title}</li>
        );
        return (
            <div>{mappingFilms}</div>
        )
    }
}

export default FilmsGrid;
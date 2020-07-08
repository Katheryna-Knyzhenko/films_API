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
                .then((response) => response.data.detail)
        } else {
            this.setState({selectedFilmId: null})
        }
    }



    render() {

        const mappingFilms = this.props.films.map((film) =>

            <li className='filmLi' key='film.episode_id' onClick={() => this.chooseFilm(film.episode_id)}>{film.title}
                { this.state.selectedFilmId === film.episode_id ? <div>я здесь!</div> : null}

            </li>
        );


        return (

            <div>{mappingFilms}
            </div>
        )
    }
}

export default FilmsGrid;
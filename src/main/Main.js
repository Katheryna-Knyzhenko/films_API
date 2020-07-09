import React, {Component} from 'react';
import './Main.css';
import FilmsGrid from "../films_grid/FilmsGrid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faSearch);

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [], inputValue: ''
        };
        this.sortFilmsByName = this.sortFilmsByName.bind(this);
    }

    sortFilmsByName(event) {
        event.preventDefault();
        this.setState({inputValue: event.target.value});

        const axios = require('axios');

        axios.get(`https://swapi.dev/api/films/?search=${event.target.value}`).then((result) =>
        {
            function compare(prev, next) {
                if (prev.title < next.title)
                    return -1;
                if (prev.title > next.title)
                    return 1;
                return 0;
            }
            const sortedSearchedFilm = result.data.results.sort(compare);
            this.setState({films: sortedSearchedFilm})})
    }

    componentDidMount() {


        const axios = require('axios');
        axios.get('https://swapi.dev/api/films/').then((result) => {
            function compare(prev, next) {
                if (prev.title < next.title)
                    return -1;
                if (prev.title > next.title)
                    return 1;
                return 0;
            }

            const sortedFilms = result.data.results.sort(compare);

            this.setState({films: sortedFilms})
        })
    }


    render() {



        return (
            <div className="App">
                <div className='wrap'>
               <div className='divButtonSearch'>
                   <input className='input' placeholder='Search' onChange={this.sortFilmsByName}/>
                   <FontAwesomeIcon  className='fontInInput' icon= {faSearch}/>
                   </div>
                <FilmsGrid films = {this.state.films}/>
            </div>
            </div>
        );
    }
}

export default Main;

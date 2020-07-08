import React, {Component} from 'react';
import './Main.css';
import FilmsGrid from "../FilmsGrid/FilmsGrid";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [{}]
        }
    }

    componentDidMount() {

        /*function getAllFilms () {
            return axios.get('https://swapi.dev/api/films/')
        }*/

        const axios = require('axios');
        axios.get('https://swapi.dev/api/films/').then((result) => {
            // debugger;

            function compare(prev, next) {
                if (prev.title < next.title)
                    return -1;
                if (prev.title > next.title)
                    return 1;
                return 0;
            }


            const sortedFilms = result.data.results.sort(compare);
            console.log('sortedFilms', sortedFilms);


            this.setState({films: sortedFilms})
        })
    }

//     this.state.films.sort((prev, next) => {
//     if ( prev.film.title < next.film.title ) return -1;
//     if ( prev.film.title < next.film.title ) return 1;
// })
    render() {

        const mappingFilms = this.state.films.map((film) =>

            <li key='episode_id'>{film.title}</li>
        );

        return (
            <div className="App">
                привет
                {mappingFilms}
                <FilmsGrid/>
            </div>
        );
    }
}

export default Main;

import React, {Component} from 'react';

class FilmsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const mappingFilms = this.props.films.map((film) =>

            <li key='episode_id'>{film.title}</li>
        );
        return (
            <div>{mappingFilms}</div>
        )
    }
}

export default FilmsGrid;
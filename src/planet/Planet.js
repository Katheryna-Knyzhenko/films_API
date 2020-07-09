import React  from 'react';
import '../films_grid/FilmsGrid.css';

     function Planet (props) {

        return (
            <div>
                <div className='aboutPlanet'><span className='filmDetails'>Name:</span>{props.planet.name}</div>
                <div className='aboutPlanet'><span className='filmDetails'>Diameter:</span>{props.planet.diameter}</div>
                <div className='aboutPlanet'><span className='filmDetails'>Gravity:</span>{props.planet.gravity}</div>
            </div>
        )

    }


export default Planet;
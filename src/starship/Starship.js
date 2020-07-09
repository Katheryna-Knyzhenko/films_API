import React  from 'react';
import '../films_grid/FilmsGrid.css';

function Starship (props) {

    return (
        <div>
            <div>
                <div className='aboutStarship'><span className='filmDetails'>Name:</span>{props.starship.name}</div>
                <div className='aboutStarship'><span className='filmDetails'>Cargo_capacity:</span>{props.starship.cargo_capacity}
                </div>
                <div className='aboutStarship'><span className='filmDetails'>Crew:</span>{props.starship.crew}
                </div>
            </div>
        </div>
    )}

        export default Starship;

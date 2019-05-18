import React from 'react';
import './StarWars.css';

const Character = props => {
    return(
        <div className="char-stats">
            <h3>{props.char.name}</h3>
            <p><strong>Height:</strong> {props.char.height}</p>
            <p><strong>Gender:</strong> {props.char.gender}</p>
            <p><strong>Mass:</strong> {props.char.mass}</p>
            <p><strong>Birth Year:</strong> {props.char.birth_year}</p>
        </div>
    );
}

export default Character;
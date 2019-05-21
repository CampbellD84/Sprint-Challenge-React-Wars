import React from 'react';
import Character from './Character';

const StarWarsChars = props => {
    return(
        <div className="list-container">
            <div className="sw-char">
                {props.starwarsChars.map(char => (
                    <Character
                     char={char}
                    />
                ))}
            </div>
        </div>
    );
}

export default StarWarsChars;
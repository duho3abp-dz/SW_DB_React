import React from 'react';
import './buttonRandom.css';

const ButtonRandom = ({ toggleRandomBlock }) => {
    return (
        <button type="button" 
            className="button-random"
            onClick={ toggleRandomBlock } >
                Toggle Random Planet
        </button>
    );
};

export default ButtonRandom;
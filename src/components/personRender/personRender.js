import React from 'react';
import './personRender.css'

const PersonRender = ({ item }) => {
    const { birthYear, eyeColor, gender } = item;

    return (
        <>
            <li className="random-block-info-item">
                <span className="random-block-info-name">Gender:</span>
                <span className="random-block-info-text">{ gender }</span>
            </li>
            <li className="random-block-info-item">
                <span className="random-block-info-name">Birth year:</span>
                <span className="random-block-info-text">{ birthYear }</span>
            </li>
            <li className="random-block-info-item">
                <span className="random-block-info-name">Eye color:</span>
                <span className="random-block-info-text">{ eyeColor }</span>
            </li>
        </>
    );
};

export default PersonRender;
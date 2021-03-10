import React from 'react';
import './planetRender.css';

const PlanetRender = ({ item }) => {
    const { population, climate, diameter, rotationPeriod } = item;

    return (
        <>
            <li className="random-block-info-item">
                <span className="random-block-info-name">Population:</span>
                <span className="random-block-info-text">{ population }</span>
            </li>
            <li className="random-block-info-item">
                <span className="random-block-info-name">Climate:</span>
                <span className="random-block-info-text">{ climate }</span>
            </li>
            <li className="random-block-info-item">
                <span className="random-block-info-name">Diameter:</span>
                <span className="random-block-info-text">{ diameter }</span>
            </li>
            <li className="random-block-info-item">
                <span className="random-block-info-name">rotationPeriod:</span>
                <span className="random-block-info-text">{ rotationPeriod }</span>
            </li>
        </>
    );
};

export default PlanetRender;
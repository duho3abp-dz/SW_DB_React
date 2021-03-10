import React from 'react';
import './planetRender.css';

const PlanetRender = ({ item }) => {
    const { population, climate, diameter, id, name, rotationPeriod } = item;

    return (
        <>
            <div className="random-block-wrapper">
                <img className="random-block-wrapper-picture" src={ `./img/planets/${ id }.jpg` } alt={ name }/>
            </div>
            <div className="random-block-info">
                <h3 className="random-block-info-title">{ name }</h3>

                <ul className="random-block-info-list">
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
                </ul>

            </div>
        </>
    );
};

export default PlanetRender;
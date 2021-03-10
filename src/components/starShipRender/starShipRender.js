import React from 'react';
import './starShipRender.css';

const StarShipRender = ({ item }) => {
    const { model, manufacturer, costInCredits, length, passengers, cargoCapacity, crew, id, name } = item;

    return (
        <>
            <div className="random-block-wrapper">
                <img className="random-block-wrapper-picture" src={ `./img/starships/${ id }.jpg` } alt={ name }/>
            </div>
            <div className="random-block-info">
                <h3 className="random-block-info-title">{ name }</h3>

                <ul className="random-block-info-list">
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Model:</span>
                        <span className="random-block-info-text">{ model }</span>
                    </li>
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Manufacturer:</span>
                        <span className="random-block-info-text">{ manufacturer }</span>
                    </li>
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Cost in credits:</span>
                        <span className="random-block-info-text">{ costInCredits }</span>
                    </li>
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Length:</span>
                        <span className="random-block-info-text">{ length }</span>
                    </li>
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Passengers:</span>
                        <span className="random-block-info-text">{ passengers }</span>
                    </li>
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Cargo capacity:</span>
                        <span className="random-block-info-text">{ cargoCapacity }</span>
                    </li>
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">crew:</span>
                        <span className="random-block-info-text">{ crew }</span>
                    </li>
                </ul>

            </div>
        </>
    );
};

export default StarShipRender;
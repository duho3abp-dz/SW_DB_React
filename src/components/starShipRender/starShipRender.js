import React from 'react';
import './starShipRender.css';

const StarShipRender = ({ item }) => {
    const { model, manufacturer, costInCredits, length, passengers, cargoCapacity, crew } = item;

    console.log(item);

    return (
        <>
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
        </>
    );
};

export default StarShipRender;
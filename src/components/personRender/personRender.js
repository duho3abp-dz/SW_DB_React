import React from 'react';
import './personRender.css'

const PersonRender = ({ item }) => {
    const { birthYear, eyeColor, gender, id, name } = item;

    return (
        <>
            <div className="random-block-wrapper">
                <img className="random-block-wrapper-picture" src={ `./img/characters/${ id }.jpg` } alt={ name }/>
            </div>
            <div className="random-block-info">
                <h3 className="random-block-info-title">{ name }</h3>

                <ul className="random-block-info-list">
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
                </ul>

            </div>
        </>
    );
};

export default PersonRender;
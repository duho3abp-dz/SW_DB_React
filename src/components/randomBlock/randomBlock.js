import React from 'react';
import './randomBlock.css';

const RandomBlock = () => {
    return (
        <div className="block random-block">
            <div className="random-block-wrapper">
                <img className="random-block-wrapper-picture" src="" alt=""/>
            </div>
            <div className="random-block-info">
                <h3 className="random-block-info-title">Planet Name</h3>

                <ul className="random-block-info-list">
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Population:</span>
                        <span className="random-block-info-text">123124</span>
                    </li>
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Population:</span>
                        <span className="random-block-info-text">123124</span>
                    </li>
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Population:</span>
                        <span className="random-block-info-text">123124</span>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default RandomBlock;
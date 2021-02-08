import React from 'react';
import './peopleInfo.css';

const PeopleInfo = () => {
    return (
        <div className="block people-info">
            <div className="random-block-wrapper">
                <img className="random-block-wrapper-picture" src="" alt=""/>
            </div>
            <div className="random-block-info">
                <h3 className="random-block-info-title">R2-D2</h3>

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

export default PeopleInfo;
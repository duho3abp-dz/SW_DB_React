import React from 'react';

import './error.css';
import icon from './space-station.svg';

const Error = () => {
    return (
        <div className="error">
            <div className="error__picture">
                <img src={ icon } alt="error-icon"/>
            </div>
            <span className="error__title">BOOM!!!</span>
            <span className="error__desc">Something went wrong...</span>
        </div>
    );
};

export default Error;
import React from 'react';
import PropTypes from 'prop-types';
import './decorators.css';

export const Row = ({ left, right }) => {
    return (
        <div className="row">
            { left }
            { right }
        </div>
    );
};

Row.propTypes = {
    left: PropTypes.node.isRequired,
    right: PropTypes.node.isRequired
}

export const Clause = ({ item, label, field }) => {
    return (
        <li className="random-block-info-item">
            <span className="random-block-info-name">{ label }:</span>
            <span className="random-block-info-text">{ item[field] }</span>
        </li>
    );
};

export const Block = ({ children, className = 'column' }) => {
    const clazz = `block ${ className }`
    return (
        <div className={ clazz }>
            { children }
        </div>
    ); 
};
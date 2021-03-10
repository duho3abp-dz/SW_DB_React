import React from 'react';
import './row.css';

const Row = ({ firsElem, secondElem }) => {
    return (
        <div className="row">
            {firsElem}
            {secondElem}
        </div>
    );
};

export default Row;
import React from 'react';
import './itemList.css';

const ItemList = () => {
    const items = [
        { value: 'Luke Skywalker', id: 'Luke Skywalker' },
        { value: 'Darth Vader', id: 'Darth Vader' },
        { value: 'R2-D2', id: 'R2-D2' }
    ];

    const itemList = items.map(({ value, id }) => {
        return (
            <li key={ id } className="item-list-item">
                <button className="item-list-button">{ value }</button>
            </li>
        );
    });

    return (
        <div className="block item-list">
            <ul className="item-list-collection">
                { itemList }
            </ul>
        </div>
    );
};

export default ItemList;
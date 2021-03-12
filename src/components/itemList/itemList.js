import React from 'react';
import './itemList.css';

const ItemList = ({ data, children, setItem }) => {
    const items = data.map((item) => {
        const { id } = item;
        const label = children(item);

        return (
            <li key={ id } className="item-list-item">
                <button 
                    className="item-list-button"
                    type="button"
                    onClick={ () => setItem(id) } >
                    { label }
                </button>
            </li>
        );
    });

    return (
        <ul className="item-list-collection">
            { items }
        </ul>
    )
}

export default ItemList;
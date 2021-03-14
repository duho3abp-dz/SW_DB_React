import React from 'react';
import PropTypes from 'prop-types';
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

ItemList.defaultProps = {
    setItem: () => {}
};

ItemList.propTypes = {
    setItem: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;
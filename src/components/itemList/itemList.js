import React from 'react';
import './itemList.css';

import { withData } from '../hoc';
// import DataBase from '../../service/dataBase';

const ItemList = ({ data, renderItem, setItem }) => {
    const itemRender = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = renderItem(item);
    
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
    };

    return itemRender(data);
}

// const { getAllPeople } = new DataBase();

export default withData(ItemList);
import React, { Component } from 'react';
import './itemList.css';

import DataBase from '../../service/dataBase';
import Loader from '../loader';

export default class ItemList extends Component {
    dataBase = new DataBase();

    state = {
        items: []
    }

    componentDidMount() {
        this.dataBase
            .getAllPeople()
            .then((items) => this.setState({ items }));
    }

    renderItems = (arr) => {
        return arr.map(({ name, id }) => {
            return (
                <li key={ id } className="item-list-item">
                    <button className="item-list-button"
                        type="button"
                        onClick={ () => this.props.setItem(id) } >
                        { name }
                    </button>
                </li>
            );
        });
    };

    render() {
        const { items } = this.state;

        const content = !items.length ? <Loader /> : this.renderItems(items);

        return (
            <div className="block item-list">
                <ul className="item-list-collection">
                    { content }
                </ul>
            </div>
        );
    }
}
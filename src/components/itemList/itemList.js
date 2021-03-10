import React, { Component } from 'react';
import './itemList.css';

import Loader from '../loader';

export default class ItemList extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((items) => this.setState({ items }));
    }

    renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.renderItem(item);

            return (
                <li key={ id } className="item-list-item">
                    <button 
                        className="item-list-button"
                        type="button"
                        onClick={ () => this.props.setItem(id) } >
                        { label }
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
import React, { Component } from 'react';
import './peoplePage.css';

import ItemList from '../itemList';
import PeopleInfo from '../peopleInfo';
import Error from '../error';

export default class PeoplePage extends Component {
    state = {
        itemId: null,
        error: false
    };

    componentDidCatch() {
        this.setState({ error: true });
    }

    setItem = (itemId) => {
        this.setState({ itemId });
    };

    render() {
        const { itemId, error } = this.state;

        const page = (
            <div className="people-page">
                <ItemList setItem={ this.setItem } />
                <PeopleInfo personId={itemId} />
            </div>
        );

        return error ? <Error /> : page;
    }
}
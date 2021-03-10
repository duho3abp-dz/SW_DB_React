import React, { Component } from 'react';
import './contentPage.css';

import ItemList from '../itemList';
import PeopleInfo from '../peopleInfo';
import Error from '../error';
import Row from '../row';

export default class ContentPage extends Component {
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

        const itemList = <ItemList 
                            setItem={ this.setItem } 
                            getData={ this.props.getData } 
                            renderItem={ this.props.renderItem }/>

        const peopleInfo = <PeopleInfo personId={itemId} />

        const content = error ? <Error /> 
            : <Row 
                firsElem={itemList} 
                secondElem={peopleInfo} />;

        return (
            <div className="page">
                { content }
            </div>
        );
    }
}
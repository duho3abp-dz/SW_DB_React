import React, { Component } from 'react';
import './contentPage.css';

import ItemList from '../itemList';
import PeopleInfo from '../peopleInfo';
import Row from '../row';
import ErrorBoundry from '../ErrorBoundry';

export default class ContentPage extends Component {
    state = {
        itemId: null
    };

    setItem = (itemId) => {
        this.setState({ itemId });
    };

    render() {
        const { itemId, error } = this.state;

        const itemList = (
            <ErrorBoundry>
                <ItemList 
                    setItem={ this.setItem } 
                    getData={ this.props.getData } 
                    renderItem={ this.props.children }/>
            </ErrorBoundry>
        );

        const peopleInfo = (
            <ErrorBoundry>
                <PeopleInfo personId={itemId} />
           </ErrorBoundry>
        );

        return (
            <div className="page">
                <ErrorBoundry >
                    <Row 
                        firsElem={itemList} 
                        secondElem={peopleInfo} />
                </ErrorBoundry>
            </div>
        );
    }
}
import React, { Component } from 'react';
import './contentPage.css';

import ItemList from '../itemList';
import ItemInfo from '../itemInfo';
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
                    renderItem={ this.props.renderItem }/>
            </ErrorBoundry>
        );

        const peopleInfo = (
            <ErrorBoundry>
                <ItemInfo 
                    id={ itemId }
                    renderInfo={ this.props.renderInfo }
                    getInfo={ this.props.getInfo } />
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
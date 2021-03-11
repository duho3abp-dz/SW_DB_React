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
                <div className="block item-list">
                    <ul className="item-list-collection">
                        <ItemList 
                            setItem={ this.setItem } 
                            getData={ this.props.getData } 
                            renderItem={ this.props.renderItem }/>
                    </ul>
                </div>
            </ErrorBoundry>
        );

        const itemInfo = (
            <ErrorBoundry>
                <ItemInfo 
                    id={ itemId }
                    getInfo={ this.props.getInfo } >
                    { this.props.children }
                </ItemInfo>
           </ErrorBoundry>
        );

        return (
            <div className="page">
                <ErrorBoundry >
                    <Row 
                        firsElem={itemList} 
                        secondElem={itemInfo} />
                </ErrorBoundry>
            </div>
        );
    }
}
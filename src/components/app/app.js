import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomBlock from '../randomBlock';
import ItemList from '../itemList';
import PeopleInfo from '../peopleInfo';

export default class App extends Component {
    state = {
        randomOpen: true,
        itemId: null
    };

    toggleRandomBlock = () => {
        this.setState(({ randomOpen }) => ({ randomOpen: !randomOpen }));
    }

    setItem = (itemId) => {
        this.setState({ itemId });
    };

    render() {
        const { randomOpen, itemId } = this.state;
        
        const random = randomOpen ? <RandomBlock /> : null;

        return (
            <div className="app">
                <div className="app-wrapper">
                    <Header />
                    { random }
    
                    <div className="app-toggle">
                        <button type="button" 
                            className="app-button"
                            onClick={ this.toggleRandomBlock } >
                                Toggle Random Planet
                        </button>
                    </div>
                    
                    <div className="app-content">
                        <ItemList setItem={ this.setItem } />
                        <PeopleInfo personId={itemId} />
                    </div>
                </div>
            </div>
        );
    }
}
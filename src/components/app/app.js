import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomBlock from '../randomBlock';
import ItemList from '../itemList';
import PeopleInfo from '../peopleInfo';
import ButtonRandom from '../buttonRandom';
import Error from '../error';

export default class App extends Component {
    state = {
        randomOpen: true,
        itemId: null,
        error: false
    };

    componentDidCatch() {
        this.setState({ error: true });
    }

    toggleRandomBlock = () => {
        this.setState(({ randomOpen }) => ({ randomOpen: !randomOpen }));
    };

    setItem = (itemId) => {
        this.setState({ itemId });
    };

    render() {
        const { randomOpen, itemId, error } = this.state;
        
        const random = randomOpen ? <RandomBlock /> : null;

        const app = (
            <div className="app">
                <div className="app-wrapper">
                    <Header />
                    { random }
    
                    <div className="app-toggle">
                        <ButtonRandom toggleRandomBlock={ this.toggleRandomBlock } />
                    </div>
                    
                    <div className="app-content">
                        <ItemList setItem={ this.setItem } />
                        <PeopleInfo personId={itemId} />
                    </div>
                </div>
            </div>
        );

        return error ? <Error /> : app;
    }
}
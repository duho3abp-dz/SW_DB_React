import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomBlock from '../randomBlock';
import ButtonRandom from '../buttonRandom';
import PeoplePage from '../peoplePage';
import Error from '../error';

export default class App extends Component {
    state = {
        randomOpen: true,
        error: false
    };

    componentDidCatch() {
        this.setState({ error: true });
    }

    toggleRandomBlock = () => {
        this.setState(({ randomOpen }) => ({ randomOpen: !randomOpen }));
    };

    render() {
        const { randomOpen, error } = this.state;
        
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
                        <PeoplePage />
                    </div>
                </div>
            </div>
        );

        return error ? <Error /> : app;
    }
}
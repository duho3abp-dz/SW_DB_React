import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomBlock from '../randomBlock';
import ButtonRandom from '../buttonRandom';
import ContentPage from '../contentPage';
import Error from '../error';
import DataBase from '../../service/dataBase';

export default class App extends Component {
    dataBase = new DataBase();

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
                        <ContentPage 
                            getData={this.dataBase.getAllPeople} 
                            renderItem={ ({name, gender}) => `${name} ( ${gender} )` }/>
                        <ContentPage 
                            getData={this.dataBase.getAllPlanets} 
                            renderItem={ ({name, diameter}) => `${name} ( ${diameter} )` }/>
                        <ContentPage 
                            getData={this.dataBase.getAllStarships} 
                            renderItem={ ({name, model}) => `${name} ( ${model} )` }/>
                    </div>
                </div>
            </div>
        );

        return error ? <Error /> : app;
    }
}
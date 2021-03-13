import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomBlock from '../randomBlock';
import ButtonRandom from '../buttonRandom';
import Error from '../error';
import ErrorBoundry from '../ErrorBoundry';
import { DataBaseProvider } from '../dataBaseContext';

import DataBase from '../../service/dataBase';
import DummyService from '../../service/dummyService';

import {
    PeopleList,
    PlanetList,
    StarshipList,
    PeopleInfo,
    PlanetInfo,
    StarshipInfo
} from '../sw-components';

export default class App extends Component {
    state = {
        randomOpen: true,
        error: false,
        dataBase: new DummyService()
    };

    componentDidCatch() {
        this.setState({ error: true });
    }

    toggleRandomBlock = () => {
        this.setState(({ randomOpen }) => ({ randomOpen: !randomOpen }));
    };

    changeService = () => {
        this.setState(({ dataBase }) => {
            const Service = dataBase instanceof DataBase ? DummyService : DataBase;
            return { dataBase: new Service };
        })                            
    }

    render() {
        const { randomOpen, error, dataBase } = this.state;
        
        const random = randomOpen ? <RandomBlock /> : null;

        const app = (
            <ErrorBoundry>
                <DataBaseProvider value={ dataBase } >
                    <div className="app">
                        <div className="app-wrapper">
                            <Header changeService={ this.changeService } />
                            { random }
            
                            <div className="app-toggle">
                                <ButtonRandom toggleRandomBlock={ this.toggleRandomBlock } />
                            </div>
                            
                            <div className="app-content">

                                <PeopleInfo id={ 11 } />
                                <PlanetInfo id={ 11 } />
                                <StarshipInfo id={ 11 } />

                                <PeopleList />
                                <PlanetList />
                                <StarshipList />

                            </div>
                        </div>
                    </div>
                </DataBaseProvider>
            </ErrorBoundry>
        );

        return error ? <Error /> : app;
    }
}
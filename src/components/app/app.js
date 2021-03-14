import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomBlock from '../randomBlock';
import Error from '../error';
import ErrorBoundry from '../ErrorBoundry';
import { DataBaseProvider } from '../dataBaseContext';

import DataBase from '../../service/dataBase';
import DummyService from '../../service/dummyService';

import { 
    PlanetPage,
    PeoplePage,
    StarshipPage
} from '../pages';

export default class App extends Component {
    state = {
        dataBase: new DataBase()
    };

    changeService = () => {
        this.setState(({ dataBase }) => {
            const Service = dataBase instanceof DataBase ? DummyService : DataBase;
            return { dataBase: new Service };
        })                            
    }

    render() {
        const { dataBase } = this.state;

        return (
            <ErrorBoundry>
                <DataBaseProvider value={ dataBase } >
                    <div className="app">
                        <div className="app-wrapper">
                            <Header changeService={ this.changeService } />
                            <RandomBlock />
                            
                            <div className="app-content">
                                <PeoplePage />
                                <PlanetPage />
                                <StarshipPage />
                            </div>
                        </div>
                    </div>
                </DataBaseProvider>
            </ErrorBoundry>
        );
    }
}
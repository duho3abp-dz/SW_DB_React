import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

import Header from '../header';
import RandomBlock from '../randomBlock';
import ErrorBoundry from '../ErrorBoundry';
import { DataBaseProvider } from '../dataBaseContext';
import DataBase from '../../service/dataBase';
import DummyService from '../../service/dummyService';

import { 
    PlanetPage,
    PeoplePage,
    StarshipPage,
    Home
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
                    <Router>
                        <div className="app">
                            <div className="app-wrapper">
                                <Header changeService={ this.changeService } />
                                <RandomBlock />
                                
                                <div className="app-content">
                                    <Route path="/" component={ Home } exact />
                                    <Route path="/people" component={ PeoplePage } />
                                    <Route path="/planets" component={ PlanetPage } />
                                    <Route path="/starships" component={ StarshipPage } />
                                    <Route path="/starships/:id" component={ StarshipPage } />
                                </div>
                            </div>
                        </div>
                    </Router>
                </DataBaseProvider>
            </ErrorBoundry>
        );
    }
}
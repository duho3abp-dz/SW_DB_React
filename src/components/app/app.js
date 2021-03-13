import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomBlock from '../randomBlock';
import ButtonRandom from '../buttonRandom';
import Error from '../error';
import DataBase from '../../service/dataBase';
import ErrorBoundry from '../ErrorBoundry';

import { DataBaseProvider } from '../dataBaseContext';

import ContentPage from '../contentPage';
import PersonRender from '../personRender';
import PlanetRender from '../planetRender';
import StarShipRender from '../starShipRender';
import { Clause } from '../decorators';
import { withData } from '../hoc';

import {
    PeopleList,
    PlanetList,
    StarshipList,
    PeopleInfo,
    PlanetInfo,
    StarshipInfo
} from '../sw-components';

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
            <ErrorBoundry>
                <DataBaseProvider value={ this.dataBase } >
                    <div className="app">
                        <div className="app-wrapper">
                            <Header />
                            { random }
            
                            <div className="app-toggle">
                                <ButtonRandom toggleRandomBlock={ this.toggleRandomBlock } />
                            </div>
                            
                            <div className="app-content">

                                <PeopleInfo itemId={ 11 } />
                                <PlanetInfo itemId={ 11 } />
                                <StarshipInfo itemId={ 11 } />

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


{/* <ContentPage 
getData={ this.dataBase.getAllPeople } 
renderItem={ ({name, gender}) => `${name} ( ${gender} )` }
getInfo={ this.dataBase.getPeople } >
<Clause label="Gender" field="gender" />
<Clause label="Birth year" field="birthYear" />
<Clause label="Eye color" field="eyeColor" />
</ContentPage>

<ContentPage 
getData={this.dataBase.getAllPlanets} 
renderItem={ ({name, diameter}) => `${name} ( ${diameter} )` }
getInfo={ this.dataBase.getPlanet } >
<Clause label="Population" field="population" />
<Clause label="Climate" field="climate" />
<Clause label="Diameter" field="diameter" />
<Clause label="Rotation period" field="rotationPeriod" />
</ContentPage>

<ContentPage 
getData={this.dataBase.getAllStarships} 
renderItem={ ({name, model}) => `${name} ( ${model} )` }
getInfo={ this.dataBase.getStarship } >
<Clause label="Model" field="model" />
<Clause label="Manufacturer" field="manufacturer" />
<Clause label="Cost in credits" field="costInCredits" />
<Clause label="Length" field="length" />
<Clause label="Passengers" field="passengers" />
<Clause label="Cargo capacity" field="cargoCapacity" />
<Clause label="Crew" field="crew" />
</ContentPage> */}
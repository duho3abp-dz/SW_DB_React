import React, { Component } from 'react';
import './randomBlock.css';

import DataBase from '../../service/dataBase';
import Loader from '../loader';

export default class RandomBlock extends Component {
    dataBase = new DataBase();

    state = {
        planet: {},
        loading: true
    }

    componentDidMount() {
        this.updatePlanet();
        setInterval(() => this.updatePlanet(), 5000); // !!!!!!!!!!!!!!! раскомментировать !!!!!!!!!!!!!!!
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet })
    }

    updatePlanet = () => {
        const randomCount = Math.floor(Math.random() * (25 - 2) + 2);

        this.dataBase
            .getPlanet(randomCount)
            .then(this.onPlanetLoaded)
            .finally(() => this.setState({ loading: false }));
    }
    
    render() {
        const { planet, loading } = this.state;

        const content = loading ? <Loader /> : <PlanetView planet={ planet } />;

        return <div className="block random-block">{ content }</div>;
    }
}

const PlanetView = ({ planet }) => {
    const { name, diameter, climate, population, id, rotationPeriod } = planet;
    return (
        <>
            <div className="random-block-wrapper">
                <img className="random-block-wrapper-picture" src={ `./img/planets/${ id }.jpg` } alt={ name }/>
            </div>
            <div className="random-block-info">
                <h3 className="random-block-info-title">{ name }</h3>

                <ul className="random-block-info-list">
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Population:</span>
                        <span className="random-block-info-text">{ population }</span>
                    </li>
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Diameter:</span>
                        <span className="random-block-info-text">{ diameter }</span>
                    </li>
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Climate:</span>
                        <span className="random-block-info-text">{ climate }</span>
                    </li>
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Rotation period:</span>
                        <span className="random-block-info-text">{ rotationPeriod }</span>
                    </li>
                </ul>

            </div>
        </>
    );
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './randomBlock.css';

import { Block } from '../decorators';
import DataBase from '../../service/dataBase';
import Loader from '../loader';
import Error from '../error';

export default class RandomBlock extends Component {
    static defaultProps = {
        updateInterval: 10000
    };

    static propTypes = {
        updateInterval: PropTypes.number
    }

    dataBase = new DataBase();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(() => this.updatePlanet(), updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, error: false });
    }

    onError = () => {
        this.setState({ error: true })
    }

    onFinally = () => {
        this.setState({ loading: false })
    }

    updatePlanet = () => {
        const randomCount = Math.floor(Math.random() * (21 - 2) + 2);

        this.dataBase
            .getPlanet(randomCount)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
            .finally(this.onFinally);
    }
    
    render() {
        const { planet, loading, error } = this.state;

        const content = error ? <Error /> 
            : loading 
            ? <Loader /> : <PlanetView planet={ planet } />;

        return (
            <Block classNames="random-block">
                { content }
            </Block>
        );
    }
}

const PlanetView = ({ planet }) => {
    const { name, diameter, climate, population, id, rotationPeriod } = planet;

    return (
        <>
            <div className="random-block-wrapper">
                <img className="random-block-wrapper-picture" src={ `/img/planets/${ id }.jpg` } alt={ name }/>
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
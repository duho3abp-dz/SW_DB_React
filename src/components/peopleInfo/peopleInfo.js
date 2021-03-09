import React, { Component } from 'react';
import './peopleInfo.css';

import DataBase from '../../service/dataBase';
import Loader from '../loader';

export default class PeopleInfo extends Component {
    dataBase = new DataBase();

    state = {
        person: null,
        loading: false
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.personId === this.props.personId) return;

        this.updatePerson();
    }

    updatePerson = () => {
        const { personId } = this.props;
        if (!personId) return;

        this.setState({ loading: true });

        this.dataBase
            .getPeople(personId)
            .then((person) => this.setState({ person }))
            .finally(() => this.setState({ loading: false }));
    };

    render() {
        const { person, loading } = this.state;
        
        const content = loading ? <Loader /> : person ? <PersonRender person={ this.state.person } /> : 'Please, select a person';

        return (
            <div className="block people-info">
                { content }
            </div>
        );
    }
}

const PersonRender = ({ person }) => {
    const { birthYear, eyeColor, gender, id, name } = person;

    return (
        <>
            <div className="random-block-wrapper">
                <img className="random-block-wrapper-picture" src={ `./img/characters/${ id }.jpg` } alt={ name }/>
            </div>
            <div className="random-block-info">
                <h3 className="random-block-info-title">{ name }</h3>

                <ul className="random-block-info-list">
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Gender:</span>
                        <span className="random-block-info-text">{ gender }</span>
                    </li>
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Birth year:</span>
                        <span className="random-block-info-text">{ birthYear }</span>
                    </li>
                    <li className="random-block-info-item">
                        <span className="random-block-info-name">Eye color:</span>
                        <span className="random-block-info-text">{ eyeColor }</span>
                    </li>
                </ul>

            </div>
        </>
    );
};
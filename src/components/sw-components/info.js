import React from 'react';

import ItemInfo from '../itemInfo';
import DataBase from '../../service/dataBase';
import { Clause } from '../decorators';

const {
    getPeople,
    getPlanet,
    getStarship
} = new DataBase();

export const PeopleInfo = ({ itemId }) => {
    return (
        <ItemInfo 
            id={ itemId }
            getInfo={ getPeople } >
            <Clause label="Gender" field="gender" />
            <Clause label="Birth year" field="birthYear" />
            <Clause label="Eye color" field="eyeColor" />
        </ItemInfo>
    );
};

export const PlanetInfo = ({ itemId }) => {
    return (
        <ItemInfo 
            id={ itemId }
            getInfo={ getPlanet } >
            <Clause label="Population" field="population" />
            <Clause label="Climate" field="climate" />
            <Clause label="Diameter" field="diameter" />
            <Clause label="Rotation period" field="rotationPeriod" />
        </ItemInfo>
    );
};

export const StarshipInfo = ({ itemId }) => {
    return (
        <ItemInfo 
            id={ itemId }
            getInfo={ getStarship } >
            <Clause label="Model" field="model" />
            <Clause label="Manufacturer" field="manufacturer" />
            <Clause label="Cost in credits" field="costInCredits" />
            <Clause label="Length" field="length" />
            <Clause label="Passengers" field="passengers" />
            <Clause label="Cargo capacity" field="cargoCapacity" />
            <Clause label="Crew" field="crew" />
        </ItemInfo>
    );
};
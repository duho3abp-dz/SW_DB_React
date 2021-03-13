import React from 'react';

import ItemInfo from '../itemInfo';
import { Clause } from '../decorators';
import { withDataBase } from '../hoc';
// import { DataBaseConsumer } from '../dataBaseContext';

const StarshipInfo = ({ itemId, dataBase: {getStarship} }) => {
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

export default withDataBase(StarshipInfo);
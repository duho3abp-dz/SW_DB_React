import React from 'react';

import ItemInfo from '../itemInfo';
import { Clause } from '../decorators';
import { withDataBase } from '../hoc';

const StarshipInfo = (props) => {
    return (
        <ItemInfo { ...props } >
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

const mapMathodsToProps = (dataBase) => {
    return {
        getInfo: dataBase.getStarship
    }
}

export default withDataBase(mapMathodsToProps)(StarshipInfo);
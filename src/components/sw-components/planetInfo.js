import React from 'react';

import ItemInfo from '../itemInfo';
import { Clause } from '../decorators';
import { withDataBase } from '../hoc';

const PlanetInfo = (props) => {
    return (
        <ItemInfo { ...props } >
            <Clause label="Population" field="population" />
            <Clause label="Climate" field="climate" />
            <Clause label="Diameter" field="diameter" />
            <Clause label="Rotation period" field="rotationPeriod" />
        </ItemInfo>
    );
};

const mapMathodsToProps = (dataBase) => {
    return {
        getInfo: dataBase.getPlanet
    }
}

export default  withDataBase(PlanetInfo, mapMathodsToProps);
import React from 'react';

import ItemInfo from '../itemInfo';
import { Clause } from '../decorators';
import { withDataBase } from '../hoc';

const PlanetInfo = ({ itemId, dataBase: {getPlanet} }) => {
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

export default  withDataBase(PlanetInfo);
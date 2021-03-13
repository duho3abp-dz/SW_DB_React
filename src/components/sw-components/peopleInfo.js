import React from 'react';

import ItemInfo from '../itemInfo';
import { Clause } from '../decorators';
import { withDataBase } from '../hoc';

const PeopleInfo = ({ itemId, dataBase: {getPeople} }) => {
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

export default withDataBase(PeopleInfo);
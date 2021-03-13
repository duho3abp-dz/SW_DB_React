import React from 'react';

import ItemInfo from '../itemInfo';
import { Clause } from '../decorators';
import { withDataBase } from '../hoc';

const PeopleInfo = (props) => {
    return (
        <ItemInfo { ...props } >
            <Clause label="Gender" field="gender" />
            <Clause label="Birth year" field="birthYear" />
            <Clause label="Eye color" field="eyeColor" />
        </ItemInfo>
    );
};

const mapMathodsToProps = (dataBase) => {
    return {
        getInfo: dataBase.getPeople
    }
}

export default withDataBase(PeopleInfo, mapMathodsToProps);
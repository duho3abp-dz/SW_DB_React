import React from 'react';

import { DataBaseConsumer } from '../dataBaseContext';

const withDataBase = (View) => {
    return (props) => {
        return (
            <DataBaseConsumer>
                {(dataBase) => {
                    return <View { ...props } dataBase={ dataBase } />
                }}
            </DataBaseConsumer>
        );
    };
};

export default withDataBase;
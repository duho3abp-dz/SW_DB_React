import React from 'react';

import { DataBaseConsumer } from '../dataBaseContext';

const withDataBase = (View, mapMethodsToProps) => {
    return (props) => {
        return (
            <DataBaseConsumer>
                {(dataBase) => {
                    const serviceProps = mapMethodsToProps(dataBase);
                    return <View { ...props } { ...serviceProps } />
                }}
            </DataBaseConsumer>
        );
    };
};

export default withDataBase;
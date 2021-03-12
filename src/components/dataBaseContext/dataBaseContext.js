import React from 'react';

const { 
    Provider: DataBaseProvider, 
    Consumer: DataBaseConsumer
} = React.createContext();

export {
    DataBaseProvider,
    DataBaseConsumer
}
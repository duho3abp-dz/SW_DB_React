import React from 'react';

import ItemList from '../itemList';
import DataBase from '../../service/dataBase';
import { withData, withChild } from '../hoc';

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = new DataBase();

const peopleFunc = ({name, gender}) => <span>{ name } ({ gender })</span>;
const planetFunc = ({name, diameter}) => <span>{ name } ({ diameter })</span>;
const starshipFunc = ({name, model}) => <span>{ name } ({ model })</span>;

export const PeopleList = withData(
    withChild(ItemList, peopleFunc),
    getAllPeople
);

export const PlanetList = withData(
    withChild(ItemList, planetFunc),
    getAllPlanets
);

export const StarshipList = withData(
    withChild(ItemList, starshipFunc),
    getAllStarships
);
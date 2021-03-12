import React from 'react';

import ItemList from '../itemList';
import DataBase from '../../service/dataBase';
import { withData } from '../hoc';

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = new DataBase();

export const PeopleList = withData(ItemList, getAllPeople);
export const PlanetList = withData(ItemList, getAllPlanets);
export const StarshipList = withData(ItemList, getAllStarships);
import React from 'react';

import ItemList from '../itemList';
import { withData, withChild, withDataBase } from '../hoc';


const peopleFunc = ({name, gender}) => <span>{ name } ({ gender })</span>;
const planetFunc = ({name, diameter}) => <span>{ name } ({ diameter })</span>;
const starshipFunc = ({name, model}) => <span>{ name } ({ model })</span>;

const mapPeopleMethodsToProps = (get) => ({ getData: get.getAllPeople });
const mapPlanetMethodsToProps = (get) => ({ getData: get.getAllPlanets });
const mapStarshipMethodsToProps = (get) => ({ getData: get.getAllStarships });

export const PeopleList = withDataBase(
    withData(withChild(ItemList, peopleFunc)),
    mapPeopleMethodsToProps
);

export const PlanetList = withDataBase(
    withData(withChild(ItemList, planetFunc)),
    mapPlanetMethodsToProps
);

export const StarshipList = withDataBase(
    withData(withChild(ItemList, starshipFunc)),
    mapStarshipMethodsToProps
);
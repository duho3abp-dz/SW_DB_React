import React from 'react';

import ItemList from '../itemList';

import { 
    withData, 
    withChild, 
    withDataBase, 
    compose 
} from '../hoc';


const peopleFunc = ({name, gender}) => <span>{ name } ({ gender })</span>;
const planetFunc = ({name, diameter}) => <span>{ name } ({ diameter })</span>;
const starshipFunc = ({name, model}) => <span>{ name } ({ model })</span>;

const mapPeopleMethodsToProps = (get) => ({ getData: get.getAllPeople });
const mapPlanetMethodsToProps = (get) => ({ getData: get.getAllPlanets });
const mapStarshipMethodsToProps = (get) => ({ getData: get.getAllStarships });

export const PeopleList = compose(
    withDataBase(mapPeopleMethodsToProps),
    withData,
    withChild(peopleFunc)
)(ItemList);

export const PlanetList = compose(
    withDataBase(mapPlanetMethodsToProps),
    withData,
    withChild(planetFunc)
)(ItemList);

export const StarshipList = compose(
    withDataBase(mapStarshipMethodsToProps),
    withData,
    withChild(starshipFunc)
)(ItemList);
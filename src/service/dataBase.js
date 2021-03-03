export default class DataBase {
    _url = 'https://swapi.dev/api'

    getResourse = async (path) => {
        const result = await fetch(`${this._url}/${path}`);
    
        if (!result.ok) {
            throw new Error(`Could not fetch ${this._url}${path}, status ${result.status}`);
        }
   
        return await result.json();
    }

    getAllPeople = async (page = 1) => {
        const res = await this.getResourse(`people/?page=${page}`);
        return res.results.map((people) => this._transformPlanet(people));
    }

    getAllStarships = async (page = 1) => {
        const res = await this.getResourse(`starships/?page=${page}`);
        return res.results.map((starship) => this._transformStarships(starship));
    }

    getAllPlanets = async (page = 1) => {
        const res = await this.getResourse(`planets/?page=${page}`);
        return res.results.map((planet) => this._transformPlanet(planet));
    }

    getPeople = async (id = 1) => {
        const result = await this.getResourse(`people/${id}`);
        return then._transformPeople(result);
    }

    getStarship = async (id = 1) => {
        const result = await this.getResourse(`starships/${id}`);
        return then._transformStarships(result);
    }

    getPlanet = async (id = 1) => {
        const result = await this.getResourse(`planets/${id}`);
        return this._transformPlanet(result);
    }

    _extractId = (url) => {
        return url.match(/\/([0-9]*)\/$/)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet.url),
            name: planet.name, 
            diameter: planet.diameter, 
            climate: planet.climate, 
            population: planet.population, 
            rotationPeriod: planet.rotation_period
        };
    }

    _transformStarships = (starship) => {
        return {
            id: this._extractId(starship.url),
            name: starship.name, 
            model: starship.model, 
            manufacturer: starship.manufacturer, 
            costInCredits: starship.costInCredits, 
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        };
    }

    _transformPeople = (people) => {
        return {
            id: this._extractId(people.url),
            name: people.name, 
            gender: people.gender, 
            birthYear: people.birthYear, 
            eyeColor: people.eyeColor
        };
    }
}
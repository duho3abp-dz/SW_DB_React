export default class DataBase {
    _url = 'https://swapi.dev/api'

    getResourse = async (path) => {
        const result = await fetch(`${this._url}/${path}`);
    
        if (!result.ok) {
            throw new Error(`Could not fetch ${this._url}${path}, status ${result.status}`);
        }
   
        return await result.json();
    };

    getAllPeople = async (page = 1) => {
        const res = await this.getResourse(`people/?page=${page}`);
        return res.results.map((people) => this._transformPeople(people));
    };

    getAllStarships = async (page = 1) => {
        const res = await this.getResourse(`starships/?page=${page}`);
        return res.results.map((starship) => this._transformStarships(starship));
    };

    getAllPlanets = async (page = 1) => {
        const res = await this.getResourse(`planets/?page=${page}`);
        return res.results.map((planet) => this._transformPlanet(planet));
    };

    getPeople = async (id = 1) => {
        const result = await this.getResourse(`people/${id}`);
        return this._transformPeople(result);
    };

    getStarship = async (id = 1) => {
        const result = await this.getResourse(`starships/${id}`);
        return this._transformStarships(result);
    };

    getPlanet = async (id = 1) => {
        const result = await this.getResourse(`planets/${id}`);
        return this._transformPlanet(result);
    };

    _extractId = (url) => {
        return url.match(/\/([0-9]*)\/$/)[1];
    };

    _transformPlanet = (planet) => {
        const id = this._extractId(planet.url);
        return {
            id,
            img: `/img/planets/${ id }.jpg`,
            name: planet.name, 
            diameter: planet.diameter, 
            climate: planet.climate, 
            population: planet.population, 
            rotationPeriod: planet.rotation_period
        };
    };

    _transformStarships = (starship) => {
        const id = this._extractId(starship.url);
        return {
            id,
            img: `/img/starships/${ id }.jpg`,
            name: starship.name, 
            model: starship.model, 
            manufacturer: starship.manufacturer, 
            costInCredits: starship.cost_in_credits, 
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        };
    };

    _transformPeople = (people) => {
        const id = this._extractId(people.url);
        return {
            id,
            img: `/img/characters/${ id }.jpg`,
            name: people.name, 
            gender: people.gender, 
            birthYear: people.birth_year, 
            eyeColor: people.eye_color
        };
    };
}
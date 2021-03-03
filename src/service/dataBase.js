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
        return res.results;
    }

    getAllStarships = async (page = 1) => {
        const res = await this.getResourse(`starships/?page=${page}`);
        return res.results;
    }

    getAllPlanets = async (page = 1) => {
        const res = await this.getResourse(`planets/?page=${page}`);
        return res.results.map((planet) => this._transformPlanet(planet));
    }

    getPeople = (id = 1) => {
        return this.getResourse(`people/${id}`);
    }

    getStarship = (id = 1) => {
        return this.getResourse(`starships/${id}`);
    }

    getPlanet = async (id = 1) => {
        const result = await this.getResourse(`planets/${id}`);
        return this._transformPlanet(result);
    }

    _extractId = (url) => {
        return url.match(/\/([0-9]*)\/$/)[1];
    }

    _transformPlanet = ({ name, diameter, climate, population, rotation_period, url }) => {
        const id = this._extractId(url);
        return { name, diameter, climate, population, id,
            rotationPeriod: rotation_period 
        };
    }
}
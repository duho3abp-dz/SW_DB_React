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
        const res = await this.getResourse(`starships/?page=${page}`)
        return res.results;
    }

    getAllPlanets = async (page = 1) => {
        const res = await this.getResourse(`planets/?page=${page}`)
        return res.results;
    }

    getPeople = (id = 1) => {
        return this.getResourse(`people/${id}`);
    }

    getStarship = (id = 1) => {
        return this.getResourse(`starships/${id}`);
    }

    getPlanet = (id = 1) => {
        return this.getResourse(`planets/${id}`);
    }
}
import axios from 'axios';

class PokemonService {
  constructor() {
    this.service = axios.create({
      baseURL: 'https://pokeapi.co/api/v2',
    });
  }

  async get(url) {
    if (this[url]) return this[url];

    const resp = await this.service.get(url);

    this.saveInCache(url, resp.data);

    return resp.data;
  }

  saveInCache(url, cachedData, time = 100000) {
    this[url] = cachedData;

    setTimeout(() => {
      this[url] = undefined;
    }, time);
  }
}

const pokemonService = new PokemonService();

export default pokemonService;

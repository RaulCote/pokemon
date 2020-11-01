import axios from 'axios';

class PokemonService {
  constructor() {
    this.service = axios.create({
      baseURL: 'https://pokeapi.co/api/v2',
    });
  }

  async get(url) {
    const resp = await this.service(url);

    return resp.data;
  }
}

const pokemonService = new PokemonService();

export default pokemonService;

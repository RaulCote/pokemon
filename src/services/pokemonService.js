import axios from 'axios';

class PokemonService {
  constructor() {
    this.pokemonService = axios.create({
      baseURL: 'https://pokeapi.co/api/v2',
    });
  }

  async getPokemonList() {
    const resp = await this.pokemonService.get('/pokemon?limit=151');

    return resp.data.results;
  }

  //   async getPokemon(name) {
  //     const response = await this.pokemonService.get(`/pokemon/${name}`);
  //   }
}

const pokemonService = new PokemonService();

export default pokemonService;

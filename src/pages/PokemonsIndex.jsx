import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonsIndex = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function getPokemonsFirstGen() {
      const pokemonService = axios.create({
        baseURL: 'https://pokeapi.co/api/v2',
        withCredentials: false,
      });

      const pokemonsList = await pokemonService.get('/pokemon?limit=151');

      setPokemons(pokemonsList.data.results);
    }
    getPokemonsFirstGen();
  }, []);

  return (
    <ul>
      {pokemons.map(pokemon => (
        <li key={`key-${pokemon.name}`}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default PokemonsIndex;

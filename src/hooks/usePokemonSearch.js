import { useState } from 'react';

const usePokemonSearch = pokemonList => {
  const [search, setSearch] = useState('');

  const pokemonListFiltered = search.length
    ? pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    : pokemonList;

  return { pokemonListFiltered, setSearch };
};

export default usePokemonSearch;

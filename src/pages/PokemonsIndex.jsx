import React from 'react';
import PokemonIndexHeader from '../components/PokemonIndexHeader';
import PokemonIndexCard from '../components/PokemonIndexCard';
import usePokemonList from '../hooks/usePokemonList';

const PokemonsIndex = () => {
  const { errorFetching, isLoading, pokemonList } = usePokemonList();
  if (errorFetching) {
    return <div>Something went wrong...</div>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="pokemonIndex">
      <PokemonIndexHeader count={pokemonList.length} />
      <ul className="pokemonIndex__list">
        {pokemonList.map(pokemon => (
          <PokemonIndexCard key={`key-${pokemon.name}`} name={pokemon.name} />
        ))}
      </ul>
    </section>
  );
};

export default PokemonsIndex;

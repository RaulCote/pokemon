import React from 'react';
import PokemonIndexHeader from '../components/PokemonIndexHeader';
import PokemonIndexCard from '../components/PokemonIndexCard';
import usePokemonFetcher from '../hooks/usePokemonFetcher';
import Container from '../components/Container';
import Loading from '../components/Loading';

const PokemonsIndex = () => {
  const { isLoading, data } = usePokemonFetcher('/pokemon?limit=151');
  const pokemonList = data?.results ?? [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <PokemonIndexHeader count={pokemonList.length} />
      <ul className="pokemonIndex">
        {pokemonList.map(pokemon => (
          <PokemonIndexCard key={`key-${pokemon.name}`} name={pokemon.name} />
        ))}
      </ul>
    </Container>
  );
};

export default PokemonsIndex;

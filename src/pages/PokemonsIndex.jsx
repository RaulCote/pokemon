import React from 'react';
import PokemonIndexHeader from '../components/PokemonIndexHeader';
import PokemonIndexCard from '../components/PokemonIndexCard';
import usePokemonFetcher from '../hooks/usePokemonFetcher';
import usePokemonSearch from '../hooks/usePokemonSearch';
import Container from '../components/Container';
import Loading from '../components/Loading';
import PokemonIndexSearch from '../components/PokemonIndexSearch';

const PokemonsIndex = () => {
  const { isLoading, data } = usePokemonFetcher('/pokemon?limit=151');
  const pokemonList = data?.results ?? [];
  const { pokemonListFiltered, setSearch } = usePokemonSearch(pokemonList);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <PokemonIndexHeader count={pokemonList.length} />
      <PokemonIndexSearch setSearch={setSearch} />
      <ul className="pokemonIndex">
        {pokemonListFiltered.map(pokemon => (
          <PokemonIndexCard key={`key-${pokemon.name}`} name={pokemon.name} />
        ))}
      </ul>
    </Container>
  );
};

export default PokemonsIndex;

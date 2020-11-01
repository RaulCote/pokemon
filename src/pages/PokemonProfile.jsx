import React from 'react';
import { useParams } from 'react-router-dom';
import usePokemonFetcher from '../hooks/usePokemonFetcher';

const PokemonProfile = () => {
  const { name } = useParams();
  const { errorFetching, isLoading, data: pokemon } = usePokemonFetcher(
    `/pokemon/${name}`
  );

  if (errorFetching) {
    return <div>Something went wrong...</div>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // console.log('PokemonProfile Page :::: ', pokemon);

  return (
    <>
      <p>ID: {pokemon.id}</p>
      <p>
        Type:{' '}
        {pokemon.types.map(({ type }) => (
          <li key={`${pokemon.id}-${type.name}`}>{type.name}</li>
        ))}
      </p>
      <p>Height: {pokemon.height}</p>
      <p>
        Abilities:
        {pokemon.abilities.map(({ ability }) => (
          <li key={`${pokemon.id}-${ability.name}`}>{ability.name}</li>
        ))}
      </p>
    </>
  );
};

export default PokemonProfile;

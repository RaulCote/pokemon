import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import usePokemonFetcher from '../hooks/usePokemonFetcher';
import CloseButton from '../components/CloseButton';
import PokemonGif from '../components/PokemonGif';

const PokemonProfile = () => {
  const { name } = useParams();
  const history = useHistory();
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
    <article className="pokemonProfile">
      <CloseButton
        className="pokemonProfile__close"
        onClick={() => history.push('/pokemon')}
      />
      <PokemonGif className="pokemonProfile__image" name={pokemon.name} />
      <h5 className="pokemonProfile__name">{pokemon.name}</h5>
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
    </article>
  );
};

export default PokemonProfile;

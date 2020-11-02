import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import usePokemonFetcher from '../hooks/usePokemonFetcher';
import CloseButton from '../components/CloseButton';
import PokemonGif from '../components/PokemonGif';
import Loading from '../components/Loading';
import Container from '../components/Container';
import PokemonProfileLabel from '../components/PokemonProfileLabel';

const PokemonProfile = () => {
  const { name } = useParams();
  const history = useHistory();
  const { isLoading, data: pokemon } = usePokemonFetcher(`/pokemon/${name}`);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <article className="pokemonProfile">
        <CloseButton
          className="pokemonProfile__close"
          onClick={() => history.push('/pokemon')}
        />

        <PokemonGif className="pokemonProfile__image" name={pokemon.name} />
        <h3 className="pokemonProfile__name">{pokemon.name}</h3>

        <PokemonProfileLabel title="ID" properties={[pokemon.id]} />
        <PokemonProfileLabel
          title="Type"
          properties={pokemon.types.map(({ type }) => type.name)}
        />
        <PokemonProfileLabel title="Height" properties={[pokemon.height]} />
        <PokemonProfileLabel
          title="Habilities"
          properties={pokemon.abilities.map(({ ability }) => ability.name)}
        />
      </article>
    </Container>
  );
};

export default PokemonProfile;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PokemonGif from './PokemonGif';

const PokemonIndexCard = ({ name }) => (
  <Link className="pokemonIndexCard" to={`/pokemon/${name}`}>
    <PokemonGif className="pokemonIndexCard__image" name={name} />
    <h5 className="pokemonIndexCard__name">{name}</h5>
  </Link>
);

export default PokemonIndexCard;

PokemonIndexCard.propTypes = {
  name: PropTypes.string.isRequired,
};

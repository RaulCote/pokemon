import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonIndexCard = ({ name }) => (
  <Link className="pokemonIndexCard" to={`/pokemon/${name}`}>
    <div className="pokemonIndexCard__image">
      <img
        alt={`${name}-gif`}
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
      />
    </div>
    <h5 className="pokemonIndexCard__name">{name}</h5>
  </Link>
);

export default PokemonIndexCard;

PokemonIndexCard.propTypes = {
  name: PropTypes.string.isRequired,
};

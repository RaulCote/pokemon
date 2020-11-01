import React from 'react';
import PropTypes from 'prop-types';

const PokemonIndexCard = ({ name }) => (
  <li className="pokemonIndexCard">
    <div className="pokemonIndexCard__image">
      <img
        alt={`${name}-gif`}
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
      />
    </div>
    <h5 className="pokemonIndexCard__name">{name}</h5>
  </li>
);

export default PokemonIndexCard;

PokemonIndexCard.propTypes = {
  name: PropTypes.string.isRequired,
};

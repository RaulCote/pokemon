import React from 'react';
import PropTypes from 'prop-types';

const PokemonGif = ({ className, name }) => (
  <div className={className}>
    <img
      alt={`${name}-gif`}
      src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
    />
  </div>
);

export default PokemonGif;

PokemonGif.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

PokemonGif.defaultProps = {
  className: '',
};

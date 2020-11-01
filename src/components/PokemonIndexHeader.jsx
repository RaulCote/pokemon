import React from 'react';
import PropTypes from 'prop-types';
import POKEMON_LOGO from '../../public/assets/pokemon-logo.png';

const PokemonIndexHeader = ({ count }) => (
  <header className="pokemonIndexHeader">
    <img alt="Pokemon Logo" src={POKEMON_LOGO} />
    <div className="pokemonIndexHeader__text">
      <h3>Generation 1</h3>
      <h5>{count} pokemon</h5>
    </div>
  </header>
);

export default PokemonIndexHeader;

PokemonIndexHeader.propTypes = {
  count: PropTypes.number.isRequired,
};

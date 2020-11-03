import React from 'react';
import PropTypes from 'prop-types';

const PokemonIndexSearch = ({ setSearch }) => (
  <div className="pokemonIndexSearch">
    <input
      className="pokemonIndexSearch__input"
      placeholder="Search..."
      type="text"
      onChange={e => setSearch(e.target.value)}
    />
  </div>
);

export default PokemonIndexSearch;

PokemonIndexSearch.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

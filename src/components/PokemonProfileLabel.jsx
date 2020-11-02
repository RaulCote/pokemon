import React from 'react';
import PropTypes from 'prop-types';

const PokemonProfileLabel = ({ title, properties }) => {
  if (properties.length === 1) {
    return (
      <div className="pokemonProfileLabel__single">
        <strong>{title}:</strong>
        <p>{properties}</p>
      </div>
    );
  }

  if (properties.length > 1) {
    return (
      <div className="pokemonProfileLabel__list">
        <strong>{title}</strong>
        <ul>
          {properties.map(prop => (
            <li key={`$key-pokemon-prop-${prop}`}>{prop}</li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

export default PokemonProfileLabel;

PokemonProfileLabel.propTypes = {
  title: PropTypes.string.isRequired,
  properties: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

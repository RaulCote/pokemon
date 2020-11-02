import React from 'react';
import PropTypes from 'prop-types';

const CloseButton = ({ className, onClick }) => (
  <button
    type="button"
    className={`closeButton ${className}`}
    onClick={onClick}
  >
    X
  </button>
);

export default CloseButton;
CloseButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

CloseButton.defaultProps = {
  className: '',
};

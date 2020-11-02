import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Error = ({ message }) => (
  <div className="error">
    <h1>{message}</h1>
    <Link className="error__link" to="/pokemon">
      Go Back
    </Link>
  </div>
);

export default Error;

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <section className="container">{children}</section>
);

export default Container;
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

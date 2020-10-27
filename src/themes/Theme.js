import React from 'react';
import PropTypes from 'prop-types';

const Theme = ({ children, theme }) => {
  return <div className={`theme__${theme}`}>{children}</div>;
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['default', 'dark', 'neon']),
};

export default Theme;

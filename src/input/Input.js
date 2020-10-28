import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className = '', ...rest }) => {
  return <input className={`input ${className}`} {...rest} />;
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;

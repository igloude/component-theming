import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ className, disabled, size = 'default', text, theme = 'primary', ...rest }) => {
  return (
    <button
      className={classNames(
        'button',
        { [`button__${theme}`]: true },
        { [`button__${size}`]: size !== 'default' },
        { button__disabled: disabled },
      )}
      {...rest}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;

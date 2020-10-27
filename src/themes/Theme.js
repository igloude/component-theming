import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';
import Input from '../input/Input';

const Theme = ({ theme }) => {
  return (
    <div className={`theme theme__${theme}`}>
      <div className="inputRow">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
      </div>
      <Input placeholder="Email" />
      <div className="actionsRow">
        <Button text="Clear" theme="secondary" />
        <Button text="Submit" />
      </div>
    </div>
  );
};

Theme.propTypes = {
  theme: PropTypes.oneOf(['default', 'dark', 'neon']),
};

export default Theme;

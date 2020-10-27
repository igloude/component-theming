import React from 'react';
import PropTypes from 'prop-types';

export default function APIEval({ api, method, args = [] }) {
  const result = api[method](...args);
  if (typeof result !== 'boolean') return result.toString();
  return <span style={{ color: `${result ? 'green' : 'red'}` }}>{result.toString()}</span>;
}

APIEval.propTypes = {
  api: PropTypes.any.isRequired,
  method: PropTypes.string.isRequired,
  args: PropTypes.array,
};

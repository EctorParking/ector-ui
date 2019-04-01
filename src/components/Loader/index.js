import React from 'react';
import PropTypes from 'prop-types';

import s from './Loader.module.css';

const Loader = ({
  size,
  className,
  testid,
}) => (
  <div testid={testid} className={[s.loader, s[size], className].join(' ')} />
);

Loader.defaultProps = {
  className: undefined,
  testid: undefined,
  size: 'small',
};

Loader.propTypes = {
  size: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  className: PropTypes.string,
  testid: PropTypes.string,
};


export default Loader;

import React from 'react';
import PropTypes from 'prop-types';

import s from './Header.module.css';

const GenderPicker = ({ className }) => (
  <div className={[s.container, className].join(' ')}>

  </div>
);

GenderPicker.defaultProps = {
  className: undefined,
};

GenderPicker.propTypes = {
  className: PropTypes.string,
};

export default GenderPicker;

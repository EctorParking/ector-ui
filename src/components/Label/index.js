import React from 'react';
import PropTypes from 'prop-types';

import s from './Label.css';

const Label = ({
  label,
  logo,
  containerClass,
  color,
}) => (
  <div
    className={[s.labelContainer, containerClass, s[color]].join(' ')}
  >
    <span className={`icon-ec-${logo}`} />
    <span className={s.text}>{label}</span>
  </div>
);

Label.defaultProps = {
  containerClass: '',
};

Label.propTypes = {
  logo: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  containerClass: PropTypes.string,
  color: PropTypes.string.isRequired,
};


export default Label;

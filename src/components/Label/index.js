import React from 'react';
import PropTypes from 'prop-types';
import s from './Label.module.css';

const Label = ({ label, logo, className, color }) => (
  <div className={[s.labelContainer, s[`${color}Color`], className].join(' ')}>
    <span className={`icon-ec-${logo}`} />
    <span className={s.text}>{label}</span>
  </div>
);

Label.defaultProps = {
  className: '',
};

Label.propTypes = {
  logo: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default Label;

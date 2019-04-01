import React from 'react';
import PropTypes from 'prop-types';
import s from './Subtitle.module.css';

const Subtitle = ({ label, className }) => (
  <div className={`${s.subtitle} ${className}`}>
    <h2>{label}</h2>
    <hr />
  </div>
);

Subtitle.defaultProps = {
  className: '',
};

Subtitle.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Subtitle;

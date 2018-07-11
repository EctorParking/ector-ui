import React from 'react';
import PropTypes from 'prop-types';
import s from './Subtitle.css';

const Subtitle = ({ label }) => (
  <div className={s.subtitle}>
    <h2>{label}</h2>
    <hr />
  </div>
);

Subtitle.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Subtitle;

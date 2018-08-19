import React from 'react';
import PropTypes from 'prop-types';
import s from './Title.css';

const Title = ({ label, className }) => (
  <div className={`${s.title} ${className}`}>
    <h1>{label}</h1>
    <hr />
  </div>
);

Title.defaultProps = {
  className: '',
};

Title.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;

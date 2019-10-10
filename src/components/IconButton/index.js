import React from 'react';
import PropTypes from 'prop-types';
import s from './IconButton.module.css';

const IconButton = ({ onClick, icon, label }) => (
  <button
    className={s.button}
    type="button"
    onClick={onClick}
  >
    {icon}
    <div className={s.label}>{label}</div>
  </button>
);

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default IconButton;

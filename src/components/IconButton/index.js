import React from 'react';
import PropTypes from 'prop-types';
import s from './IconButton.module.css';
import Box from '../Box';

const IconButton = ({ onClick, icon, label }) => (
  <Box>
    <button onClick={onClick} className={s.button}>
      {icon}
      <div className={s.label}>{label}</div>
    </button>
  </Box>
);

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default IconButton;

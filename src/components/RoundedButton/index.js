import React from 'react';
import PropTypes from 'prop-types';
import s from './RoundedButton.css';

const RoundedButton = ({
  text,
  color,
  onClick,
}) => (
  <div style={{ borderColor: color }} className={s.buttonContainer}>
    <button onClick={onClick} className={s.button} style={{ color }}>{text.toUpperCase()}</button>
  </div>
);

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

RoundedButton.defaultProps = {
  color: '#ffcd02',
};

export default RoundedButton;

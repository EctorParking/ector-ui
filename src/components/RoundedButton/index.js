import React from 'react';
import PropTypes from 'prop-types';
import s from './RoundedButton.css';

const RoundedButton = ({
  text,
  onClick,
  testid,
  className,
}) => (
  <button
    onClick={onClick}
    className={[s.buttonContainer, className].join(' ')}
    textid={testid}
  >
    {text.toUpperCase()}
  </button>
);

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string,
  className: PropTypes.string,
};

RoundedButton.defaultProps = {
  testid: '',
  className: '',
};

export default RoundedButton;

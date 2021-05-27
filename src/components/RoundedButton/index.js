import React from 'react';
import PropTypes from 'prop-types';
import s from './RoundedButton.module.css';

const RoundedButton = ({ text, onClick, testid, className, fetching }) => (
  <button
    onClick={onClick}
    className={[
      s.buttonContainer,
      className,
      fetching ? s.fetching : undefined,
    ].join(' ')}
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
  fetching: PropTypes.bool,
};

RoundedButton.defaultProps = {
  testid: '',
  className: '',
  fetching: false,
};

export default RoundedButton;

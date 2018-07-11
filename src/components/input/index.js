import React from 'react';
import PropTypes from 'prop-types';

import s from './input.css';

const Input = ({
  inputType,
  inputPlaceHolder,
  inputId,
  onFocus,
  onBlur,
}) => (
  <input
    className={s.input}
    type={inputType}
    placeholder={inputPlaceHolder}
    id={inputId}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);

Input.defaultProps = {
  inputPlaceHolder: '',
  inputId: '',
  onFocus: () => {},
  onBlur: () => {},
};

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputPlaceHolder: PropTypes.string,
  inputId: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};


export default Input;

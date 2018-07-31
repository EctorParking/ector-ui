import React from 'react';
import PropTypes from 'prop-types';

import s from './Input.css';

const Input = ({
  inputType,
  inputPlaceHolder,
  inputId,
  onFocus,
  onBlur,
  onChange,
  checked,
}) => (
  <input
    className={s.input}
    type={inputType}
    placeholder={inputPlaceHolder}
    id={inputId}
    onFocus={onFocus}
    onBlur={onBlur}
    onChange={onChange}
    checked={checked}
  />
);

Input.defaultProps = {
  inputPlaceHolder: '',
  inputId: '',
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
  checked: false,
};

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputPlaceHolder: PropTypes.string,
  inputId: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};


export default Input;

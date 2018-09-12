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
  value,
  hasError,
  className,
}) => (
  <input
    className={[s.input, hasError ? s.inputWithError : '', className].join(' ')}
    type={inputType}
    placeholder={inputPlaceHolder}
    id={inputId}
    onFocus={onFocus}
    onBlur={onBlur}
    onChange={onChange}
    checked={checked}
    value={value}
  />
);

Input.defaultProps = {
  inputPlaceHolder: '',
  inputId: '',
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
  checked: false,
  value: '',
  className: '',
  hasError: false,
};

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputPlaceHolder: PropTypes.string,
  inputId: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  hasError: PropTypes.bool,
};


export default Input;

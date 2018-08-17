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
  className,
}) => (
  <input
    className={[s.input, className].join(' ')}
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
};


export default Input;

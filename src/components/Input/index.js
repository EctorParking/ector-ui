import React from 'react';
import PropTypes from 'prop-types';

import s from './Input.css';

const Input = ({
  onFocus,
  onBlur,
  onChange,
  checked,
  value,
  hasError,
  className,
  ...restOfProps
}) => (
  <input
    className={[s.input, hasError ? s.inputWithError : '', className].join(' ')}
    onFocus={onFocus}
    onBlur={onBlur}
    onChange={onChange}
    checked={checked}
    value={value}
    {...restOfProps}
  />
);

Input.defaultProps = {
  placeholder: '',
  id: '',
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
  checked: false,
  value: '',
  className: '',
  hasError: false,
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  hasError: PropTypes.bool,
};


export default Input;

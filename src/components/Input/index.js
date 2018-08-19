import React from 'react';
import PropTypes from 'prop-types';

import s from './Input.css';

const Input = ({
  type,
  placeholder,
  id,
  onFocus,
  onBlur,
  onChange,
  checked,
  value,
  className,
  ...restOfProps
}) => (
  <input
    className={[s.input, className].join(' ')}
    type={type}
    placeholder={placeholder}
    id={id}
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
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
};


export default Input;

import React from 'react';
import PropTypes from 'prop-types';

import s from './RadioButton.css';

const RadioButton = ({
  name,
  value,
  label,
  onSelect,
  className,
  ...restOfProps
}) => (
  <label
    htmlFor={`${name}-${value}`}
    className={`${s.radioButton} ${className}`}
  >
    <input
      type="radio"
      name={name}
      value={value}
      id={`${name}-${value}`}
      onChange={() => onSelect(value)}
      {...restOfProps}
    />

    <span>{label}</span>
  </label>
);

RadioButton.defaultProps = {
  onSelect: () => {},
  className: '',
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  className: PropTypes.string,
};

export default RadioButton;

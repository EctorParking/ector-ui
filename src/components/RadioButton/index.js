import React from 'react';
import PropTypes from 'prop-types';

import s from './RadioButton.module.css';

const RadioButton = ({
  name,
  value,
  label,
  onSelect,
  className,
  labelClassName,
  ...restOfProps
}) => (
  <label
    htmlFor={`${name}-${value}`}
    className={`${s.radioButton} ${className}`}
  >
    <input
      className={s.input}
      type="radio"
      name={name}
      value={value}
      id={`${name}-${value}`}
      onChange={() => onSelect(value)}
      {...restOfProps}
    />

    <span className={s.button} />
    {label && <span className={`${s.label} ${labelClassName}`}>{label}</span> }
  </label>
);

RadioButton.defaultProps = {
  onSelect: () => {},
  className: '',
  labelClassName: '',
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
};

export default RadioButton;

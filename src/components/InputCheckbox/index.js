import React from 'react';
import PropTypes from 'prop-types';

import s from './InputCheckbox.module.css';

const InputCheckbox = ({
  id,
  children,
  onChange,
  checked,
  className,
  checkmarkClassName,
  ...restOfProps
}) => (
  <label
    htmlFor={`${id}`}
    className={`${s.input_checkbox} ${className}`}
  >

    { children }

    <input
      type="checkbox"
      id={`${id}`}
      onChange={onChange}
      checked={checked}
      {...restOfProps}
    />
    <span className={[s.checkmark, checkmarkClassName].join(' ')} />

  </label>
);

InputCheckbox.defaultProps = {
  id: undefined,
  onChange: () => {},
  checked: false,
  className: '',
  checkmarkClassName: undefined,
};

InputCheckbox.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  className: PropTypes.string,
  checkmarkClassName: PropTypes.string,
};

export default InputCheckbox;

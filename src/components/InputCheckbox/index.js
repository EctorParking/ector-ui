import React from 'react';
import PropTypes from 'prop-types';

import s from './InputCheckbox.css';

const InputCheckbox = ({
  id,
  children,
  onChange,
  checked,
  className,
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
    <span className={s.checkmark} />

  </label>
);

InputCheckbox.defaultProps = {
  id: 'InputStart',
  onChange: () => {},
  checked: false,
  className: '',
};

InputCheckbox.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  className: PropTypes.string,
};

export default InputCheckbox;

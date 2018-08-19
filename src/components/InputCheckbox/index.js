import React from 'react';
import PropTypes from 'prop-types';

import s from './InputCheckbox.css';

import Input from '../Input';

const InputCheckbox =
({
  inputId,
  children,
  onChange,
  checked,
  className,
}) => (
  <label
    htmlFor={`${inputId}`}
    className={s.input_checkbox}
  >

    { children }

    <Input
      inputType="checkbox"
      inputId={`${inputId}`}
      id={`${inputId}`}
      onChange={onChange}
      checked={checked}
    />
    <span className={s.checkmark} />

  </label>
);

InputCheckbox.defaultProps = {
  inputId: 'InputStart',
  onChange: () => {},
  checked: false,
  className: '',
};

InputCheckbox.propTypes = {
  children: PropTypes.node.isRequired,
  inputId: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  className: PropTypes.string,
};

export default InputCheckbox;

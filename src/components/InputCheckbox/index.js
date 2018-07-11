import React from 'react';
import PropTypes from 'prop-types';

import s from './InputCheckbox.css';

import Input from '../Input';

const InputCheckbox = ({ inputId, children }) => (
  <label
    htmlFor={`${inputId}`}
    className={s.input_checkbox}
  >

    { children }

    <Input
      inputType="checkbox"
      inputId={`${inputId}`}
      id={`${inputId}`}
    />
    <span className={s.checkmark} />

  </label>
);

InputCheckbox.defaultProps = {
  inputId: 'InputStart',
};

InputCheckbox.propTypes = {
  children: PropTypes.node.isRequired,
  inputId: PropTypes.string,
};


export default InputCheckbox;

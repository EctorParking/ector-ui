import React from 'react';
import PropTypes from 'prop-types';

import s from './InputLabel.css';

import Input from '../Input';

const InputLabel = ({
  label, id, mandatory, placeholder, type, className, inputClassName, ...inputProps
}) => {
  const labelClassName = mandatory ? s.mandatory : '';

  return (
    <label
      htmlFor={id}
      className={[labelClassName, s.label, className].join(' ')}
    >
      {`${label}${mandatory ? '*' : ''}`}

      <Input
        className={[s.input, inputClassName].join(' ')}
        inputId={id}
        inputPlaceHolder={placeholder}
        inputType={type}
        {...inputProps}
      />

    </label>
  );
};

InputLabel.defaultProps = {
  id: 'InputStart',
  mandatory: false,
  placeholder: '',
  className: '',
  inputClassName: '',
};

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  mandatory: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOfType(['text', 'number']).isRequired,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
};


export default InputLabel;

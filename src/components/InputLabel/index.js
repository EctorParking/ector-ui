import React from 'react';
import PropTypes from 'prop-types';

import s from './InputLabel.css';

import Input from '../Input';

const InputLabel = ({
  label,
  id,
  mandatory,
  placeholder,
  type,
  className,
  inputClassName,
  errorClassName,
  error,
  left,
  children,
  InputComponent,
  LabelComponent,
  inputContainerClassName,
  ...inputProps
}) => {
  const labelClassName = mandatory ? s.mandatory : '';

  return (
    <div className={[s.container, left ? s.left : '', className].join(' ')}>
      {
        LabelComponent !== null && typeof LabelComponent === 'function' && LabelComponent() ? (
          <LabelComponent className={labelClassName} />
        ) : (
          <label
            htmlFor={id}
            className={[labelClassName, s.label].join(' ')}
          >
            {label}
          </label>
        )
      }

      <div className={[s.inputContainer, inputContainerClassName].join(' ')}>
        {
          InputComponent !== null && typeof InputComponent === 'function' && InputComponent() ? (
            <InputComponent />
          ) : (
            <Input
              className={[s.input, inputClassName].join(' ')}
              id={id}
              placeholder={placeholder}
              type={type}
              hasError={!!error}
              {...inputProps}
            />
          )
        }
        {
          !!error && (
            <div className={[s.error, errorClassName].join(' ')}>{error}</div>
          )
        }
      </div>
    </div>
  );
};

InputLabel.defaultProps = {
  id: 'InputStart',
  mandatory: false,
  placeholder: '',
  className: '',
  inputClassName: '',
  error: null,
  left: false,
  children: null,
  InputComponent: null,
  LabelComponent: null,
  type: 'text',
  inputContainerClassName: '',
  errorClassName: '',
};

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  mandatory: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOfType(['text', 'number']),
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  inputContainerClassName: PropTypes.string,
  error: PropTypes.string,
  left: PropTypes.bool,
  children: PropTypes.node,
  InputComponent: PropTypes.func,
  LabelComponent: PropTypes.func,
  errorClassName: PropTypes.string,
};

export default InputLabel;

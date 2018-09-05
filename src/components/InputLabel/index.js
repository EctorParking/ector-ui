import React, { Fragment } from 'react';
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
  error,
  left,
  children,
  InputComponent,
  ...inputProps
}) => {
  const labelClassName = mandatory ? s.mandatory : '';

  return (
    <Fragment>
      <div className={[s.container, left ? s.left : '', className].join(' ')}>
        <label
          htmlFor={id}
          className={[labelClassName, s.label].join(' ')}
        >
          {`${label}${mandatory ? '*' : ''}`}
        </label>

        {
          InputComponent !== null && typeof InputComponent === 'function' ? (
            <InputComponent />
          ) : (
            <Input
              className={[s.input, inputClassName].join(' ')}
              inputId={id}
              inputPlaceHolder={placeholder}
              inputType={type}
              hasError={!!error}
              {...inputProps}
            />
          )
        }
      </div>
      {
        !!error && (
          <div className={s.error}>{error}</div>
        )
      }
    </Fragment>
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
};

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  mandatory: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOfType(['text', 'number']).isRequired,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  error: PropTypes.string,
  left: PropTypes.bool,
  children: PropTypes.node,
  InputComponent: PropTypes.func,
};

export default InputLabel;

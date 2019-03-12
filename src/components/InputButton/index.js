import React from 'react';
import PropTypes from 'prop-types';
import s from './InputButton.css';

import Input from '../Input';
import Button from '../Button';

const InputButton = ({
  id,
  placeholder,
  buttonText,
  errorClassName,
  inputClassName,
  inputContainerClassName,
  inputButtonContainerClassName,
  helpText,
  helpTextClassname,
  inputType,
  error,
  ButtonComponent,
  ...inputProps
}) =>
  (
    <div className={[s.inputButtonContainerClassName, inputButtonContainerClassName].join(' ')}>
      <div className={[s.inputContainerClassName, inputContainerClassName].join(' ')}>
        <Input
          placeholder={placeholder}
          className={[s.input, inputClassName].join(' ')}
          id={id}
          type={inputType}
          hasError={!!error}
          {...inputProps}
        />
        {error ? (
          <div className={[s.error, errorClassName].join(' ')}>{error}</div>
        ) : (<p className={[s.helpTextClassname, helpTextClassname].join(' ')} >{helpText}</p>) }
      </div>
      <ButtonComponent className={s.button}>
        {buttonText}
      </ButtonComponent>
    </div>
  );


InputButton.defaultProps = {
  buttonText: '',
  inputButtonContainerClassName: '',
  helpText: '',
  helpTextClassname: '',
  id: 'InputButton',
  placeholder: '',
  inputClassName: '',
  errorClassName: '',
  error: null,
  inputType: 'text',
  inputContainerClassName: '',
  ButtonComponent: props => (<Button {...props} component="button" />),
};

InputButton.propTypes = {
  id: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  inputClassName: PropTypes.string,
  inputContainerClassName: PropTypes.string,
  inputButtonContainerClassName: PropTypes.string,
  helpText: PropTypes.string,
  helpTextClassname: PropTypes.string,
  errorClassName: PropTypes.string,
  error: PropTypes.string,
  ButtonComponent: PropTypes.func,
};

export default InputButton;

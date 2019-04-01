import React from 'react';
import PropTypes from 'prop-types';
import s from './InputButton.module.css';

import { Input, Button } from '..';

const InputButton = ({
  id,
  placeholder,
  buttonText,
  inputClassName,
  inputContainerClassName,
  inputButtonContainerClassName,
  inputType,
  hasError,
  ButtonComponent,
  SubTextComponent,
  ...inputProps
}) => (
  <div className={[s.inputButtonContainerClassName, inputButtonContainerClassName].join(' ')}>
    <div className={[s.inputContainerClassName, inputContainerClassName].join(' ')}>
      <Input
        placeholder={placeholder}
        className={[s.input, inputClassName].join(' ')}
        id={id}
        type={inputType}
        hasError={hasError}
        {...inputProps}
      />
      <SubTextComponent />
    </div>
    <ButtonComponent className={s.button}>
      {buttonText}
    </ButtonComponent>
  </div>
);


InputButton.defaultProps = {
  inputButtonContainerClassName: '',
  id: 'InputButton',
  placeholder: '',
  inputClassName: '',
  hasError: false,
  inputType: 'text',
  inputContainerClassName: '',
  ButtonComponent: props => (<Button {...props} component="button" title="button" />),
  SubTextComponent: () => null,
};

InputButton.propTypes = {
  id: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  inputClassName: PropTypes.string,
  inputContainerClassName: PropTypes.string,
  inputButtonContainerClassName: PropTypes.string,
  hasError: PropTypes.bool,
  ButtonComponent: PropTypes.func,
  SubTextComponent: PropTypes.func,
};

export default InputButton;

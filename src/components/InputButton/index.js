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
  buttonVisible,
  IconComponent,
  ButtonComponent,
  SubTextComponent,
  LeftComponent,
  RightComponent,
  ...inputProps
}) => (
  <div className={[s.inputButtonContainerClassName, inputButtonContainerClassName].join(' ')}>
    <div className={inputContainerClassName}>
      <Input
        placeholder={placeholder}
        className={[buttonVisible ? s.input : undefined, inputClassName].join(' ')}
        id={id}
        type={inputType}
        hasError={hasError}
        RightComponent={({ className }) => <IconComponent className={[className, s.icon].join(' ')} />}
        {...inputProps}
      />
      <SubTextComponent />
    </div>
    {buttonVisible && (
      <ButtonComponent className={s.button}>
        {buttonText}
      </ButtonComponent>
    )}
  </div>
);


InputButton.defaultProps = {
  inputButtonContainerClassName: '',
  id: 'InputButton',
  placeholder: '',
  inputClassName: '',
  hasError: false,
  buttonVisible: true,
  inputType: 'text',
  inputContainerClassName: '',
  IconComponent: () => null,
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
  buttonVisible: PropTypes.bool,
  IconComponent: PropTypes.func,
  ButtonComponent: PropTypes.func,
  SubTextComponent: PropTypes.func,
};

export default InputButton;

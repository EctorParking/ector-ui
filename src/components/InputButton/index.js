import React from 'react';
import PropTypes from 'prop-types';
import s from './InputButton.css';

import Input from '../Input';
import Button from '../Button';

const InputButton = ({
  id,
  placeholder,
  buttonTitle,
  buttonText,
  errorClassName,
  inputClassName,
  inputContainerClassName,
  inputButtonContainerClassName,
  buttonClassName,
  helpText,
  helpTextClassname,
  inputType,
  error,
  buttonAnimationDuration,
  buttonFetchingDelay,
  buttonHref,
  buttonTo,
  buttonType,
  buttonOnClick,
  buttonFetching,
  buttonDisabled,
  buttonComponent,
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
      <Button
        title={buttonTitle}
        className={[s.button, buttonClassName].join(' ')}
        type={buttonType}
        animationDuration={buttonAnimationDuration}
        fetchingDelay={buttonFetchingDelay}
        href={buttonHref}
        onClick={buttonOnClick}
        to={buttonTo}
        fetching={buttonFetching}
        disabled={buttonDisabled}
        component={buttonComponent}
      >
        {buttonText}
      </Button>
    </div>
  );


InputButton.defaultProps = {
  buttonTitle: '',
  inputButtonContainerClassName: '',
  buttonClassName: '',
  helpText: '',
  helpTextClassname: '',
  id: 'InputButton',
  placeholder: '',
  inputClassName: '',
  errorClassName: '',
  error: null,
  inputType: 'text',
  inputContainerClassName: '',
  buttonAnimationDuration: 1.5,
  buttonFetchingDelay: 0.5,
  buttonHref: '#',
  buttonOnClick: null,
  buttonTo: '',
  buttonType: 'button',
  buttonFetching: false,
  buttonDisabled: false,
  buttonComponent: null,
};

InputButton.propTypes = {
  buttonTitle: PropTypes.string,
  id: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  inputClassName: PropTypes.string,
  inputContainerClassName: PropTypes.string,
  inputButtonContainerClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  helpText: PropTypes.string,
  helpTextClassname: PropTypes.string,
  errorClassName: PropTypes.string,
  error: PropTypes.string,
  buttonAnimationDuration: PropTypes.number,
  buttonFetchingDelay: PropTypes.number,
  buttonHref: PropTypes.string,
  buttonOnClick: PropTypes.func,
  buttonTo: PropTypes.string,
  buttonType: PropTypes.string,
  buttonFetching: PropTypes.bool,
  buttonDisabled: PropTypes.bool,
  buttonComponent: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
};

export default InputButton;

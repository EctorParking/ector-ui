import React from 'react';
import PropTypes from 'prop-types';

import s from './LoginForm.css';
import { InputLabel, Card, LinkUnderlined } from '..';
import TextsType, { DefaultTexts } from './LoginFormTextsType';
import { LoginFormErrorsType, LoginFormValuesType } from './LoginType';

const LoginForm = ({
  className,
  values,
  errors,
  texts,
  onChangeEmail,
  onChangePassword,
  onSubmit,
  emailInputClassName,
  passwordInputClassName,
  contentClassName,
  buttonClassName,
  fetching,
  errorLogin,
  ...cardProps
}) => (
  <Card {...cardProps} className={[s.card, className].join(' ')} contentClassName={[s.contentCard, contentClassName].join(' ')}>
    <InputLabel
      className={[s.input, emailInputClassName].join('')}
      inputClassName={typeof errorLogin !== 'undefined' && errorLogin !== '' ? s.inputError : undefined}
      label={texts.email}
      mandatory
      type="email"
      id="emailInput"
      value={values.email}
      onChange={onChangeEmail}
      error={errors.email}
    />
    <InputLabel
      className={[s.input, passwordInputClassName].join('')}
      inputClassName={typeof errorLogin !== 'undefined' && errorLogin !== '' ? s.inputError : undefined}
      label={texts.password}
      mandatory
      type="password"
      id="passwordInput"
      value={values.password}
      onChange={onChangePassword}
      error={errors.password}
    />
    {typeof errorLogin !== 'undefined' && <div className={s.error}>{errorLogin}</div>}
    <LinkUnderlined onClick={onSubmit} className={[s.button, buttonClassName].join(' ')} fetching={fetching}>
      <span>{texts.submitButton}</span>
    </LinkUnderlined>
  </Card>
);

LoginForm.defaultProps = {
  texts: DefaultTexts,
  className: undefined,
  emailInputClassName: undefined,
  passwordInputClassName: undefined,
  contentClassName: undefined,
  buttonClassName: undefined,
  fetching: false,
  errorLogin: undefined,
};

LoginForm.propTypes = {
  values: LoginFormValuesType.isRequired,
  errors: LoginFormErrorsType.isRequired,
  errorLogin: PropTypes.string,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  texts: TextsType,
  className: PropTypes.string,
  emailInputClassName: PropTypes.string,
  passwordInputClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  fetching: PropTypes.bool,
};

export default LoginForm;

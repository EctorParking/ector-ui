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
}) => (
  <Card className={[s.card, className].join(' ')} contentClassName={[s.contentCard, contentClassName].join(' ')}>
    <InputLabel
      className={[s.input, emailInputClassName].join('')}
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
      label={texts.password}
      mandatory
      type="password"
      id="passwordInput"
      value={values.password}
      onChange={onChangePassword}
      error={errors.password}
    />
    <LinkUnderlined onClick={onSubmit} className={[s.button, buttonClassName].join(' ')} >
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
};

LoginForm.propTypes = {
  values: LoginFormValuesType.isRequired,
  errors: LoginFormErrorsType.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  texts: TextsType,
  className: PropTypes.string,
  emailInputClassName: PropTypes.string,
  passwordInputClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default LoginForm;

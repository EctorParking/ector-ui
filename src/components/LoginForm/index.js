import React from 'react';
import PropTypes from 'prop-types';

import s from './LoginForm.module.css';
import {
  InputLabel, Card, LinkUnderlined, ActionLink,
} from '..';
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
  onClickEditEmail,
  emailInputClassName,
  passwordInputClassName,
  contentClassName,
  buttonClassName,
  fetching,
  errorLogin,
  buttonTestid,
  RootComponent,
  SubmitButtonComponent,
  onClickPasswordForgotten,
  shouldDisplayEmailField,
  shouldDisplayEmailText,
  ...cardProps
}) => (
  <RootComponent {...cardProps} className={[s.card, className].join(' ')} contentClassName={[s.contentCard, contentClassName].join(' ')}>
    {shouldDisplayEmailField && !shouldDisplayEmailText && (
      <InputLabel
        className={[s.input, emailInputClassName].join('')}
        hasError={!!errors.email || (typeof errorLogin !== 'undefined' && errorLogin !== '')}
        label={texts.email}
        mandatory
        type="email"
        id="loginFormEmailInput"
        value={values.email || ''}
        onChange={onChangeEmail}
        error={errors.email}
      />
    )
    }
    {shouldDisplayEmailText && (
      <InputLabel
        className={[s.input, emailInputClassName].join('')}
        hasError={!!errors.email || (typeof errorLogin !== 'undefined' && errorLogin !== '')}
        label={texts.email}
        mandatory
        type="email"
        id="loginFormEmailInput"
        InputComponent={() => (
          <div className={s.emailTextContainer}>
            {values.email}
            {' '}
            <button
              onClick={onClickEditEmail}
              id="EditEmailButton"
            >
              <i className="icon-edit " id="EditIcon" />
            </button>
          </div>
        )}
        value={values.email || ''}
        onChange={onChangeEmail}
        error={errors.email}
      />
    )
    }
    <InputLabel
      className={[s.input, passwordInputClassName].join(' ')}
      hasError={!!errors.password || (typeof errorLogin !== 'undefined' && errorLogin !== '')}
      label={texts.password}
      mandatory
      type="password"
      id="loginFormPasswordInput"
      value={values.password || ''}
      onChange={onChangePassword}
      error={errors.password}
    />
    {
      onClickPasswordForgotten && (
        <ActionLink
          label={texts.onClickPasswordForgottenLabel}
          className={s.forgottenPasswordLink}
          onClick={onClickPasswordForgotten}
        />
      )
    }
    {typeof errorLogin !== 'undefined' && errorLogin !== '' && <div className={s.error}>{errorLogin}</div>}
    <SubmitButtonComponent onClick={onSubmit} className={[s.button, buttonClassName].join(' ')} fetching={fetching} testid={buttonTestid}>
      <span>{texts.submitButton}</span>
    </SubmitButtonComponent>
  </RootComponent>
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
  buttonTestid: undefined,
  // eslint-disable-next-line react/prop-types
  RootComponent: ({ children, ...cardProps }) => (<Card {...cardProps}>{children}</Card>),
  // eslint-disable-next-line
  SubmitButtonComponent: ({ children, ...buttonProps }) => (<LinkUnderlined {...buttonProps}>{children}</LinkUnderlined>),
  onClickEditEmail: () => {},
  onClickPasswordForgotten: undefined,
  shouldDisplayEmailField: true,
  shouldDisplayEmailText: false,
  onSubmit: undefined,
};

LoginForm.propTypes = {
  values: LoginFormValuesType.isRequired,
  errors: LoginFormErrorsType.isRequired,
  errorLogin: PropTypes.string,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onClickEditEmail: PropTypes.func,
  onSubmit: PropTypes.func,
  texts: TextsType,
  className: PropTypes.string,
  emailInputClassName: PropTypes.string,
  passwordInputClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  fetching: PropTypes.bool,
  buttonTestid: PropTypes.string,
  RootComponent: PropTypes.func,
  SubmitButtonComponent: PropTypes.func,
  onClickPasswordForgotten: PropTypes.func,
  shouldDisplayEmailField: PropTypes.bool,
  shouldDisplayEmailText: PropTypes.bool,
};

export default LoginForm;

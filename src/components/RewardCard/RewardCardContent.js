import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardContent.css';
import Tooltip from '../Tooltip';
import LoginForm from '../LoginForm';
import { LoginFormErrorsType, LoginFormValuesType } from '../LoginForm/LoginType';
import RoundedButton from '../RoundedButton';
import RewardCardTextTypes from './RewardCardTextTypes';

class RewardCardContent extends Component {
  renderRootComponent = ({ children, ...restOfProps }) => (<div {...restOfProps}>{children}</div>);
  renderSubmitButton = ({ children, ...restOfProps }) => {
    const { texts, submitButtonClassName, onSubmit } = this.props;
    return (
      <div className={s.submitButton}>
        <RoundedButton
          {...restOfProps}
          text={texts.buttonTextLogin}
          onClick={onSubmit}
          className={submitButtonClassName}
        >
          {children}
        </RoundedButton>
      </div>);
  };


  render() {
    const {
      rewardValue,
      iconClassName,
      isConnected,
      isSelected,
      formValues,
      formErrors,
      onChangePassword,
      onChangeEmail,
      onSubmit,
      texts,
    } = this.props;

    return (
      <div className={s.contentContainer}>
        { !isConnected && isSelected ? (
          <div>
            <span>
              { texts.loginText }
            </span>
            <LoginForm
              values={formValues}
              onSubmit={onSubmit}
              onChangePassword={onChangePassword}
              errors={formErrors}
              onChangeEmail={onChangeEmail}
              RootComponent={this.renderRootComponent}
              SubmitButtonComponent={this.renderSubmitButton}
              className={s.rewardLoginForm}
            />
          </div>
        ) : (
          <div>
            <span className={s.rewardValue}>{rewardValue}</span>
            <span className={s.rewardText}>
              {texts.rewardText}
              {texts.rewardTooltip &&
              (
                <Tooltip
                  className={s.tooltip}
                  text={texts.rewardTooltip}
                  iconClassName={iconClassName}
                />)
              }
            </span>
          </div>)}

      </div>
    );
  }
}

RewardCardContent.propTypes = {
  texts: RewardCardTextTypes.isRequired,
  rewardValue: PropTypes.string.isRequired,
  iconClassName: PropTypes.string,
  isConnected: PropTypes.bool,
  isSelected: PropTypes.bool,
  formValues: LoginFormValuesType.isRequired,
  formErrors: LoginFormErrorsType.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitButtonClassName: PropTypes.string,
};

RewardCardContent.defaultProps = {
  iconClassName: 'icon-ec-info',
  isConnected: false,
  isSelected: false,
  submitButtonClassName: null,
};


export default RewardCardContent;

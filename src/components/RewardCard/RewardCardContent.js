import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardContent.css';
import Tooltip from '../Tooltip';
import LoginForm from '../LoginForm';
import { LoginFormErrorsType, LoginFormValuesType } from '../LoginForm/LoginType';
import RoundedButton from '../RoundedButton';

class RewardCardContent extends Component {
  renderRootComponent = ({ children, ...restOfProps }) => (<div {...restOfProps}>{children}</div>);
  renderSubmitButton = ({ children, ...restOfProps }) => {
    const { submitText, submitButtonClassName, onSubmit } = this.props;
    return (
      <div className={s.submitButton}>
        <RoundedButton
          {...restOfProps}
          text={submitText}
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
      rewardText,
      rewardTooltip,
      iconClassName,
      isConnected,
      isSelected,
      formValues,
      formErrors,
      onChangePassword,
      onChangeEmail,
      onSubmit,
    } = this.props;

    return (
      <div className={s.contentContainer}>
        { !isConnected && isSelected ? (
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
        ) : (
          <div>
            <span className={s.rewardValue}>{rewardValue}</span>
            <span className={s.rewardText}>
              {rewardText}
              {rewardTooltip &&
              (<Tooltip className={s.tooltip} text={rewardTooltip} iconClassName={iconClassName} />)
              }
            </span>
          </div>)}

      </div>
    );
  }
}

RewardCardContent.propTypes = {
  rewardValue: PropTypes.string.isRequired,
  rewardText: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired,
  rewardTooltip: PropTypes.string,
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
  rewardTooltip: null,
  iconClassName: 'icon-ec-info',
  isConnected: false,
  isSelected: false,
  submitButtonClassName: null,
};


export default RewardCardContent;

import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import s from './RewardCard.css';
import RewardCardHeader from './RewardCardHeader';
import RewardCardContent from './RewardCardContent';
import RewardCardFooter from './RewardCardFooter';
import { LoginFormErrorsType, LoginFormValuesType } from '../LoginForm/LoginType';
import RewardCardTextTypes from './RewardCardTextTypes';

const RewardCard = ({
  headerImage,
  rewardValue,
  rewardTooltip,
  rewardTooltipIcon,
  footerOnClick,
  prefixTestId,
  footerButtonClassName,
  isSelected,
  selectedIcon,
  isConnected,
  loginFormValues,
  loginOnChangePassword,
  loginOnChangeEmail,
  loginFormErrors,
  loginOnSubmit,
  texts,
  ...cardProps
}) => {
  const header = <RewardCardHeader headerImage={headerImage} />;
  const footer =
    (<RewardCardFooter
      onClick={footerOnClick}
      buttonClassName={footerButtonClassName}
      prefixTestid={prefixTestId}
      isSelected={isSelected}
      isConnected={isConnected}
      selectedIcon={selectedIcon}
      texts={texts}
    />);

  return (
    <Card
      {...cardProps}
      className={[s.card, isSelected ? s.scaledCard : null].join(' ')}
      HeaderChildren={header}
      FooterChildren={!isConnected && isSelected ? null : footer}
      footerClassName={s.footer}
      contentClassName={s.content}
    >
      <RewardCardContent
        texts={texts}
        rewardTooltip={rewardTooltip}
        rewardValue={rewardValue}
        isConnected={isConnected}
        isSelected={isSelected}
        formValues={loginFormValues}
        formErrors={loginFormErrors}
        onChangePassword={loginOnChangePassword}
        onChangeEmail={loginOnChangeEmail}
        onSubmit={loginOnSubmit}
        submitButtonClassName={footerButtonClassName}
      />
    </Card>
  );
};

RewardCard.propTypes = {
  texts: RewardCardTextTypes.isRequired,
  headerImage: PropTypes.string.isRequired,
  rewardValue: PropTypes.string.isRequired,
  footerOnClick: PropTypes.func.isRequired,
  loginFormValues: LoginFormValuesType.isRequired,
  loginFormErrors: LoginFormErrorsType.isRequired,
  loginOnChangePassword: PropTypes.func.isRequired,
  loginOnChangeEmail: PropTypes.func.isRequired,
  loginOnSubmit: PropTypes.func.isRequired,
  rewardTooltip: PropTypes.string,
  prefixTestId: PropTypes.string,
  footerButtonClassName: PropTypes.string,
  rewardTooltipIcon: PropTypes.string,
  isSelected: PropTypes.bool,
  selectedIcon: PropTypes.string,
  isConnected: PropTypes.bool,
};

RewardCard.defaultProps = {
  prefixTestId: '',
  footerButtonClassName: '',
  rewardTooltip: null,
  rewardTooltipIcon: 'icon-ec-info',
  isSelected: false,
  selectedIcon: '\u2713',
  isConnected: false,
};


export default RewardCard;

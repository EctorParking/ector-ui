import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import s from './RewardCard.css';
import RewardCardHeader from './RewardCardHeader';
import RewardCardContent from './RewardCardContent';
import RewardCardFooter from './RewardCardFooter';

const RewardCard = ({
  headerImage,
  rewardValue,
  rewardText,
  rewardTooltip,
  rewardTooltipIcon,
  footerButtonText,
  footerOnClick,
  prefixTestId,
  footerButtonClassName,
  isSelected,
  selectedIcon,
  ...cardProps
}) => {
  const header = <RewardCardHeader headerImage={headerImage} />;
  const footer = (
    <RewardCardFooter
      onClick={footerOnClick}
      buttonText={footerButtonText}
      buttonClassName={footerButtonClassName}
      prefixTestid={prefixTestId}
      isSelected={isSelected}
      selectedIcon={selectedIcon}
    />);

  return (
    <Card
      {...cardProps}
      className={s.card}
      HeaderChildren={header}
      FooterChildren={footer}
      footerClassName={s.footer}
      contentClassName={s.content}
    >
      <RewardCardContent
        rewardTooltip={rewardTooltip}
        rewardText={rewardText}
        rewardValue={rewardValue}
      />
    </Card>
  );
};

RewardCard.propTypes = {
  headerImage: PropTypes.string.isRequired,
  rewardValue: PropTypes.string.isRequired,
  rewardText: PropTypes.string.isRequired,
  rewardTooltip: PropTypes.string,
  footerButtonText: PropTypes.string.isRequired,
  footerOnClick: PropTypes.func.isRequired,
  prefixTestId: PropTypes.string,
  footerButtonClassName: PropTypes.string,
  rewardTooltipIcon: PropTypes.string,
  isSelected: PropTypes.bool,
  selectedIcon: PropTypes.string,
};

RewardCard.defaultProps = {
  prefixTestId: '',
  footerButtonClassName: '',
  rewardTooltip: null,
  rewardTooltipIcon: 'icon-ec-info',
  isSelected: false,
  selectedIcon: '\u2713',
};


export default RewardCard;

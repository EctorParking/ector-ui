import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import s from './RewardCard.css';
import RewardCardHeader from './RewardCardHeader';
import RewardCardContent from './RewardCardContent';
import RewardCardFooter from './RewardCardFooter';
import RewardCardTextTypes from './RewardCardTextTypes';

const RewardCard = ({
  headerImage,
  rewardValue,
  rewardTooltipIcon,
  footerOnClick,
  prefixTestId,
  footerButtonClassName,
  isSelected,
  selectedIcon,
  isConnected,
  texts,
  hasExternalCard,
  children,
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
      { children || (<RewardCardContent
        texts={texts}
        rewardValue={rewardValue}
        isConnected={isConnected}
        isSelected={isSelected}
      />)}
    </Card>
  );
};

RewardCard.propTypes = {
  texts: RewardCardTextTypes.isRequired,
  headerImage: PropTypes.string.isRequired,
  rewardValue: PropTypes.string.isRequired,
  footerOnClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  prefixTestId: PropTypes.string,
  footerButtonClassName: PropTypes.string,
  rewardTooltipIcon: PropTypes.string,
  isSelected: PropTypes.bool,
  selectedIcon: PropTypes.string,
  isConnected: PropTypes.bool,
  hasExternalCard: PropTypes.bool,
};

RewardCard.defaultProps = {
  prefixTestId: '',
  footerButtonClassName: '',
  rewardTooltipIcon: 'icon-ec-info',
  isSelected: false,
  selectedIcon: '\u2713',
  isConnected: false,
  children: null,
  hasExternalCard: false,
};


export default RewardCard;

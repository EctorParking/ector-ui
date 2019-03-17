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
  mobileHeaderImage,
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
  isExternalCardUpdatable,
  onClickEditExternalCard,
  editExternalCardClassName,
  fetching,
  className,
  ...cardProps
}) => {
  const header = (
    <RewardCardHeader
      headerImage={headerImage}
      mobileHeaderImage={mobileHeaderImage}
    />
  );
  const footer = (
    <RewardCardFooter
      onClick={footerOnClick}
      buttonClassName={footerButtonClassName}
      prefixTestid={prefixTestId}
      isSelected={isSelected}
      isConnected={isConnected}
      selectedIcon={selectedIcon}
      texts={texts}
      hasExternalCard={hasExternalCard}
      isExternalCardUpdatable={isExternalCardUpdatable}
      fetching={fetching}
    />
  );

  return (
    <Card
      {...cardProps}
      className={[s.card, isSelected ? s.scaledCard : null, className].join(' ')}
      HeaderChildren={header}
      FooterChildren={!isConnected && isSelected ? null : footer}
      footerClassName={s.footer}
      contentClassName={s.content}
    >
      { children || (
        <RewardCardContent
          texts={texts}
          rewardValue={rewardValue}
          isConnected={isConnected}
          isSelected={isSelected}
          isExternalCardUpdatable={isExternalCardUpdatable}
          onClickEditExternalCard={onClickEditExternalCard}
          editExternalCardClassName={editExternalCardClassName}
        />
      )}
    </Card>
  );
};

RewardCard.propTypes = {
  texts: RewardCardTextTypes.isRequired,
  headerImage: PropTypes.string.isRequired,
  mobileHeaderImage: PropTypes.string,
  rewardValue: PropTypes.string.isRequired,
  footerOnClick: PropTypes.func.isRequired,
  onClickEditExternalCard: PropTypes.func,
  children: PropTypes.node,
  prefixTestId: PropTypes.string,
  footerButtonClassName: PropTypes.string,
  rewardTooltipIcon: PropTypes.string,
  isSelected: PropTypes.bool,
  selectedIcon: PropTypes.string,
  isConnected: PropTypes.bool,
  hasExternalCard: PropTypes.bool,
  isExternalCardUpdatable: PropTypes.bool,
  fetching: PropTypes.bool,
  editExternalCardClassName: PropTypes.string,
  className: PropTypes.string,
};

RewardCard.defaultProps = {
  mobileHeaderImage: '',
  prefixTestId: '',
  footerButtonClassName: '',
  rewardTooltipIcon: 'icon-ec-info',
  isSelected: false,
  selectedIcon: 'check',
  isConnected: false,
  children: null,
  hasExternalCard: true,
  isExternalCardUpdatable: true,
  fetching: false,
  editExternalCardClassName: '',
  className: undefined,
  onClickEditExternalCard: undefined,
};


export default RewardCard;

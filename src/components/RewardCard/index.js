import React from 'react';
import PropTypes from 'prop-types';
import s from './RewardCard.module.css';
import RewardCardHeader from './RewardCardHeader';
import RewardCardContent from './RewardCardContent';
import RewardCardTextTypes from './RewardCardTextTypes';

const RewardCard = ({
  name,
  image,
  rewardValue,
  rewardTooltipIcon,
  onRadioButtonChange,
  prefixTestId,
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
  contentClassName,
  ...cardProps
}) => (
  <div className={[s.card, className].join(' ')}>
    <div className={s.left}>
      <RewardCardHeader
        texts={texts}
        isSelected={isSelected}
        onRadioButtonChange={onRadioButtonChange}
        name={name}
        rewardValue={rewardValue}
        rewardTooltipIcon={rewardTooltipIcon}
      />

      {isSelected && (
        <RewardCardContent className={contentClassName}>
          {children}
        </RewardCardContent>
      )}
    </div>
    <div
      className={[s.imageContainer, isSelected && children ? s.imageContainerBig : undefined].join(' ')}
      style={{ backgroundImage: `url(${image})` }}
    />
  </div>
);

RewardCard.propTypes = {
  name: PropTypes.string.isRequired,
  texts: RewardCardTextTypes.isRequired,
  image: PropTypes.string.isRequired,
  rewardValue: PropTypes.string.isRequired,
  onRadioButtonChange: PropTypes.func.isRequired,
  onClickEditExternalCard: PropTypes.func,
  children: PropTypes.node,
  prefixTestId: PropTypes.string,
  rewardTooltipIcon: PropTypes.string,
  isSelected: PropTypes.bool,
  selectedIcon: PropTypes.string,
  isConnected: PropTypes.bool,
  hasExternalCard: PropTypes.bool,
  isExternalCardUpdatable: PropTypes.bool,
  fetching: PropTypes.bool,
  editExternalCardClassName: PropTypes.string,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
};

RewardCard.defaultProps = {
  prefixTestId: '',
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
  contentClassName: undefined,
  onClickEditExternalCard: undefined,
};


export default RewardCard;

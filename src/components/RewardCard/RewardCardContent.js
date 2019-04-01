import React from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardContent.module.css';
import Tooltip from '../Tooltip';
import RewardCardTextTypes from './RewardCardTextTypes';

const RewardCardContent = ({
  rewardValue,
  iconClassName,
  texts,
  isExternalCardUpdatable,
  onClickEditExternalCard,
  editExternalCardClassName,
}) => (
  <div className={s.contentContainer}>
    <span className={s.rewardValue}>{rewardValue}</span>
    <span className={s.rewardText}>
      {texts.rewardText}
      {isExternalCardUpdatable && texts.updateExternalCard && onClickEditExternalCard
      && (
        <button
          className={editExternalCardClassName}
          onClick={onClickEditExternalCard}
        >
          {texts.updateExternalCard}
        </button>
      )}
      {texts.rewardTooltip
        && (
          <Tooltip
            className={s.tooltip}
            text={texts.rewardTooltip}
            iconClassName={iconClassName}
          />
        )
      }
    </span>
  </div>
);

RewardCardContent.propTypes = {
  texts: RewardCardTextTypes.isRequired,
  rewardValue: PropTypes.string.isRequired,
  onClickEditExternalCard: PropTypes.func.isRequired,
  iconClassName: PropTypes.string,
  isExternalCardUpdatable: PropTypes.bool,
  editExternalCardClassName: PropTypes.string,
};

RewardCardContent.defaultProps = {
  iconClassName: 'icon-ec-info',
  isExternalCardUpdatable: false,
  editExternalCardClassName: '',
};


export default RewardCardContent;

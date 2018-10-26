import React from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardContent.css';
import Tooltip from '../Tooltip';
import RewardCardTextTypes from './RewardCardTextTypes';

const RewardCardContent = ({
  rewardValue,
  iconClassName,
  texts,
}) => (
  <div className={s.contentContainer}>
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
    </div>
  </div>
);

RewardCardContent.propTypes = {
  texts: RewardCardTextTypes.isRequired,
  rewardValue: PropTypes.string.isRequired,
  iconClassName: PropTypes.string,
};

RewardCardContent.defaultProps = {
  iconClassName: 'icon-ec-info',
};


export default RewardCardContent;

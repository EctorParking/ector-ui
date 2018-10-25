import React from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardContent.css';
import Tooltip from '../Tooltip';

const RewardCardContent = ({
  rewardValue,
  rewardText,
  rewardTooltip,
  iconClassName,
}) => (
  <div className={s.contentContainer}>
    <span className={s.rewardValue}>{rewardValue}</span>
    <span className={s.rewardText}>
      {rewardText}
      { rewardTooltip &&
        (<Tooltip className={s.tooltip} text={rewardTooltip} iconClassName={iconClassName} />)
      }
    </span>
  </div>
);

RewardCardContent.propTypes = {
  rewardValue: PropTypes.string.isRequired,
  rewardText: PropTypes.string.isRequired,
  rewardTooltip: PropTypes.string,
  iconClassName: PropTypes.string,
};

RewardCardContent.defaultProps = {
  rewardTooltip: null,
  iconClassName: 'icon-ec-info',
};


export default RewardCardContent;

import React from 'react';
import PropTypes from 'prop-types';
import { text } from '@storybook/addon-knobs';
import s from './RewardCardContent.css';
import Tooltip from '../Tooltip';

const RewardCardContent = ({
  rewardValue,
  rewardText,
  rewardTooltip,
}) => (
  <div className={s.contentContainer}>
    <span className={s.rewardValue}>{rewardValue}</span>
    <span className={s.rewardText}>
      {rewardText}
      { rewardTooltip &&
        (<Tooltip className={s.tooltip} text={rewardTooltip} iconClassName={text('Icon', 'icon-ec-info')} />)
      }
    </span>
  </div>
);

RewardCardContent.propTypes = {
  rewardValue: PropTypes.string.isRequired,
  rewardText: PropTypes.string.isRequired,
  rewardTooltip: PropTypes.string,
};

RewardCardContent.defaultProps = {
  rewardTooltip: null,
};


export default RewardCardContent;

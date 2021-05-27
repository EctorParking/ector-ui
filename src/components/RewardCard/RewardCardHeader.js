import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import RadioButton from '../RadioButton';
import RewardCardTextTypes from './RewardCardTextTypes';
import s from './RewardCardHeader.module.css';

const RewardCardHeader = ({
  texts,
  isSelected,
  onRadioButtonChange,
  name,
  rewardValue,
  rewardTooltipIcon,
}) => (
  <div className={s.header}>
    <RadioButton
      label=" "
      checked={isSelected}
      onSelect={onRadioButtonChange}
      name={name}
    />

    <span className={s.text}>
      <strong className={s.rewardValue}>{rewardValue}</strong>
      <span className={s.textDesktop}>{texts.rewardText}</span>
      <span className={s.textMobile}>{texts.rewardTextMobile}</span>

      <Tooltip
        className={s.tooltip}
        iconClassName={rewardTooltipIcon}
        text={texts.rewardTooltip}
      />
    </span>
  </div>
);

RewardCardHeader.propTypes = {
  name: PropTypes.string.isRequired,
  texts: RewardCardTextTypes.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onRadioButtonChange: PropTypes.func.isRequired,
  rewardValue: PropTypes.string.isRequired,
  rewardTooltipIcon: PropTypes.string.isRequired,
};

export default RewardCardHeader;

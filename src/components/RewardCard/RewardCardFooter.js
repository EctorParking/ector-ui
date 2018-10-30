import React from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardFooter.css';
import RoundedButton from '../RoundedButton';
import RewardCardTextTypes from './RewardCardTextTypes';

const RewardCardFooter = ({
  onClick,
  prefixTestid,
  buttonClassName,
  isSelected,
  isConnected,
  selectedIcon,
  texts,
  hasExternalCard,
}) => (
  <div>
    {isConnected && isSelected && hasExternalCard ?
      (<span className={s.selected}>{selectedIcon}</span>)
      : (<RoundedButton onClick={onClick} text={texts.footerButtonText} testid={`${prefixTestid}RewardCardFooterButton`} className={buttonClassName} />)
    }
  </div>
);

RewardCardFooter.propTypes = {
  texts: RewardCardTextTypes.isRequired,
  onClick: PropTypes.func,
  prefixTestid: PropTypes.string,
  buttonClassName: PropTypes.string,
  isSelected: PropTypes.bool,
  isConnected: PropTypes.bool,
  selectedIcon: PropTypes.string,
  hasExternalCard: PropTypes.bool,
};

RewardCardFooter.defaultProps = {
  prefixTestid: '',
  buttonClassName: '',
  onClick: () => {},
  isSelected: false,
  isConnected: false,
  selectedIcon: '\u2713',
  hasExternalCard: false,
};


export default RewardCardFooter;

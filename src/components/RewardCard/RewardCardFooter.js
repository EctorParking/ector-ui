import React from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardFooter.css';
import RoundedButton from '../RoundedButton';

const RewardCardFooter = ({
  buttonText,
  onClick,
  prefixTestid,
  buttonClassName,
  isSelected,
  selectedIcon,
}) => (
  <div className={s.footerContainer}>
    {isSelected ?
      (<p className={s.selected}>{selectedIcon}</p>) :
      (<RoundedButton onClick={onClick} text={buttonText} testid={`${prefixTestid}RewardCardFooterButton`} className={buttonClassName} />
      )}
  </div>
);

RewardCardFooter.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  prefixTestid: PropTypes.string,
  buttonClassName: PropTypes.string,
  isSelected: PropTypes.bool,
  selectedIcon: PropTypes.string,
};

RewardCardFooter.defaultProps = {
  prefixTestid: '',
  buttonClassName: '',
  onClick: () => {},
  isSelected: false,
  selectedIcon: '\u2713',
};


export default RewardCardFooter;

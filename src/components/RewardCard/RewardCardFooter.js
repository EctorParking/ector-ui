import React from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardFooter.css';
import RoundedButton from '../RoundedButton';

const RewardCardFooter = ({
  buttonText,
  onClick,
  prefixTestid,
  buttonClassName,
}) => (
  <div className={s.footerContainer}>
    <RoundedButton onClick={onClick} text={buttonText} testid={`${prefixTestid}RewardCardFooterButton`} className={buttonClassName} />
  </div>
);

RewardCardFooter.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  prefixTestid: PropTypes.string,
  buttonClassName: PropTypes.string,
};

RewardCardFooter.defaultProps = {
  prefixTestid: '',
  buttonClassName: '',
  onClick: () => {},
};


export default RewardCardFooter;

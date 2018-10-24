import React from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardFooter.css';
import RoundedButton from '../RoundedButton';

const RewardCardFooter = ({
  buttonText,
  buttonColor,
  onClick,
}) => (
  <div className={s.footerContainer}>
    <RoundedButton onClick={onClick} color={buttonColor} text={buttonText} />
  </div>
);

RewardCardFooter.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
};

RewardCardFooter.defaultProps = {
  buttonColor: '#ffcd02',
};


export default RewardCardFooter;

import React from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardHeader.css';

const RewardCardHeader = ({
  headerImage,
}) => (
  <div className={s.headerContainer}>
    <img src={headerImage} className={s.image} alt="Reward" />
  </div>
);

RewardCardHeader.propTypes = {
  headerImage: PropTypes.string.isRequired,
};

export default RewardCardHeader;

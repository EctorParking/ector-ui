import React from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardHeader.css';

const RewardCardHeader = ({
  headerImage,
  mobileHeaderImage,
}) => (
  <div className={s.headerContainer}>
    <img
      src={headerImage}
      className={[s.image, s.desktopImage].join(' ')}
      alt="Reward"
    />
    <img
      src={mobileHeaderImage}
      className={[s.image, s.mobileImage].join(' ')}
      alt="Reward"
    />
  </div>
);

RewardCardHeader.propTypes = {
  headerImage: PropTypes.string.isRequired,
  mobileHeaderImage: PropTypes.string,
};

RewardCardHeader.defaultProps = {
  mobileHeaderImage: '',
};

export default RewardCardHeader;

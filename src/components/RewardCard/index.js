import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import s from './RewardCard.css';
import RewardCardHeader from './RewardCardHeader';

const RewardCard = ({
  headerImage,
}) => {
  const header = <RewardCardHeader headerImage={headerImage} />;

  return (<Card
    className={s.card}
    HeaderChildren={header}
  />
  );
};

RewardCard.propTypes = {
  headerImage: PropTypes.string.isRequired,
};


export default RewardCard;

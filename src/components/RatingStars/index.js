import React from 'react';
import PropTypes from 'prop-types';
import s from './RatingStars.module.css';

const stars = [...Array(5).keys()];

const renderActiveStar = () => (
  <span className={['icon icon-ec-star', s.activeStar].join(' ')} />
);

const renderInactiveStar = () => (
  <span className={['icon icon-ec-star', s.inactiveStar].join(' ')} />
);

const RatingStars = (props) => {
  const { value, className } = props;

  return (
    <div className={[s.container, className].join(' ')}>
      {stars.map(renderInactiveStar)}
      <div className={s.activeStars} style={{ width: `${value * 20}%` }}>
        {stars.map(renderActiveStar)}
      </div>
    </div>
  );
};

RatingStars.defaultProps = {
  value: 4,
  className: undefined,
};

RatingStars.propTypes = {
  value: PropTypes.number,
  className: PropTypes.string,
};

export default RatingStars;

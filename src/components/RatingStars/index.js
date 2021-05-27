import React from 'react';
import PropTypes from 'prop-types';
import s from './RatingStars.module.css';
import Colors from '../../style/variable.global.css';

const stars = [...Array(5).keys()];

const RatingStars = props => {
  const { value, className, activeColor, inactiveColor } = props;

  return (
    <div className={[s.container, className].join(' ')}>
      {stars.map(index => (
        <span
          key={`in-star-${index}`}
          style={{ color: inactiveColor }}
          className={['icon icon-ec-google-star', s.inactiveStar].join(' ')}
        />
      ))}
      <div className={s.activeStars} style={{ width: `${value * 20}%` }}>
        {stars.map(index => (
          <span
            key={`ac-star-${index}`}
            style={{ color: activeColor }}
            className={['icon icon-ec-google-star', s.activeStar].join(' ')}
          />
        ))}
      </div>
    </div>
  );
};

RatingStars.defaultProps = {
  value: 4,
  className: undefined,
  activeColor: Colors.yellow,
  inactiveColor: Colors.metalGrey,
};

RatingStars.propTypes = {
  value: PropTypes.number,
  className: PropTypes.string,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
};

export default RatingStars;

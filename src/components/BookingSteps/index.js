import React from 'react';
import PropTypes from 'prop-types';

import s from './BookingSteps.module.css';

const BookingSteps = ({
  className,
  pickupDescriptions,
  pickupTitle,
  returnDescriptions,
  returnTitle,
}) => (
  <div className={`${s.bookingSteps} ${className}`}>
    <div>
      <h3 className={s.stepName}>{pickupTitle}</h3>
      {pickupDescriptions.map(description => (
        <span key={description}>{description}</span>
      ))}
    </div>
    <div>
      <h3 className={s.stepName}>{returnTitle}</h3>
      {returnDescriptions.map(description => (
        <span key={description}>{description}</span>
      ))}
    </div>
  </div>
);

BookingSteps.defaultProps = {
  className: '',
};

BookingSteps.propTypes = {
  className: PropTypes.string,
  pickupDescriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  pickupTitle: PropTypes.string.isRequired,
  returnDescriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  returnTitle: PropTypes.string.isRequired,
};

export default BookingSteps;

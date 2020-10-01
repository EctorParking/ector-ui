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
    <div className={s.firstBookingStep}>
      <h3 className={s.stepName}>{pickupTitle}</h3>
      {pickupDescriptions.map(description => description)}
    </div>
    <div>
      <h3 className={s.stepName}>{returnTitle}</h3>
      {returnDescriptions.map(description => description)}
    </div>
  </div>
);

BookingSteps.defaultProps = {
  className: '',
};

BookingSteps.propTypes = {
  className: PropTypes.string,
  pickupDescriptions: PropTypes.arrayOf(PropTypes.node).isRequired,
  pickupTitle: PropTypes.string.isRequired,
  returnDescriptions: PropTypes.arrayOf(PropTypes.node).isRequired,
  returnTitle: PropTypes.string.isRequired,
};

export default BookingSteps;

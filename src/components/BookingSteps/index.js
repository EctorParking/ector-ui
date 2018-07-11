import React from 'react';
import PropTypes from 'prop-types';
import BookingStepsTextsType from './BookingStepsTextsType';

import s from './BookingSteps.css';

const BookingSteps = ({
  fromSpot,
  toSpot,
  startAt,
  endAt,
  texts,
}) => (
  <div className={s.bookingSteps}>
    <div>
      <h3 className={s.stepName}>{texts.pickup}</h3>
      <span>
        <i className="icon icon-ec-departure" />

        {fromSpot}
      </span>
      <span>
        <i className="icon icon-ec-dateA" />

        {startAt}
      </span>
    </div>
    <div>
      <h3 className={s.stepName}>{texts.return}</h3>
      <span>
        <i className="icon icon-ec-arrival" />

        {toSpot}
      </span>
      <span>
        <i className="icon icon-ec-dateB" />

        {endAt}
      </span>
    </div>
  </div>
);

BookingSteps.propTypes = {
  fromSpot: PropTypes.string.isRequired,
  toSpot: PropTypes.string.isRequired,
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string.isRequired,
  texts: BookingStepsTextsType.isRequired,
};

export default BookingSteps;
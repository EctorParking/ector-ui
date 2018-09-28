import React from 'react';
import PropTypes from 'prop-types';
import BookingModificationSummaryRow from './BookingModificationSummaryRow';
import bookingModificationSummaryTextType, { defaultTexts } from './BookingModificationSummaryTextsType';
import BookingModificationSummaryPriceType from './BookingModificationSummaryPriceType';

import s from './BookingModificationSummary.css';

const BookingModificationSummary = ({ texts, className, bookingModificationSummaryPrice }) => (
  <div className={`${s.bookingModificationSummaryContainer} ${className}`}>
    <BookingModificationSummaryRow
      price={bookingModificationSummaryPrice.initialPrice}
      text={texts.initialPrice}
      bold
    />
    <hr className={s.horizontalRule} />
    <BookingModificationSummaryRow
      price={bookingModificationSummaryPrice.parkingFee}
      text={texts.parkingFee}
      isExtra
    />
    <BookingModificationSummaryRow
      price={bookingModificationSummaryPrice.routingFee}
      text={texts.routingFee}
      isExtra
    />
    <BookingModificationSummaryRow
      price={bookingModificationSummaryPrice.administrativeFee}
      text={texts.administrativeFee}
      isExtra
    />
    <hr className={s.horizontalRule} />
    <BookingModificationSummaryRow
      price={bookingModificationSummaryPrice.leftToPay}
      text={texts.leftToPay}
      total
    />
  </div>
);

BookingModificationSummary.defaultProps = {
  className: '',
  texts: defaultTexts,
};

BookingModificationSummary.propTypes = {
  texts: bookingModificationSummaryTextType,
  className: PropTypes.string,
  bookingModificationSummaryPrice: BookingModificationSummaryPriceType.isRequired,
};

export default BookingModificationSummary;

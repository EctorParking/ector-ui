import React from 'react';
import PropTypes from 'prop-types';
import BookingModificationSummaryRow from './BookingModificationSummaryRow';
import bookingModificationSummaryTextType, { defaultTexts } from './BookingModificationSummaryTextsType';
import BookingModificationSummaryPriceType from './BookingModificationSummaryPriceType';

import s from './BookingModificationSummary.module.css';

const BookingModificationSummary = ({ texts, className, bookingModificationSummaryPrice }) => (
  <div className={`${s.bookingModificationSummaryContainer} ${className}`}>
    <BookingModificationSummaryRow
      price={bookingModificationSummaryPrice.initialPrice}
      text={texts.initialPrice}
      textClassName={s.bold}
    />
    { (
      +bookingModificationSummaryPrice.parkingFee
      || +bookingModificationSummaryPrice.routingFee
      || +bookingModificationSummaryPrice.administrativeFee
      || +bookingModificationSummaryPrice.yieldsFee)
      ? (
        <hr className={s.horizontalRule} />
      ) : null
    }
    {
      +bookingModificationSummaryPrice.parkingFee ? (
        <BookingModificationSummaryRow
          price={bookingModificationSummaryPrice.parkingFee}
          text={texts.parkingFee}
          count={bookingModificationSummaryPrice.countParkingFee}
          isExtra
        />
      ) : null
    }
    {
      +bookingModificationSummaryPrice.routingFee ? (
        <BookingModificationSummaryRow
          price={bookingModificationSummaryPrice.routingFee}
          count={bookingModificationSummaryPrice.countRoutingFee}
          text={texts.routingFee}
          isExtra
        />
      ) : null
    }
    {
      +bookingModificationSummaryPrice.administrativeFee ? (
        <BookingModificationSummaryRow
          price={bookingModificationSummaryPrice.administrativeFee}
          count={bookingModificationSummaryPrice.countAdministrativeFee}
          text={texts.administrativeFee}
          isExtra
        />
      ) : null
    }
    {
      +bookingModificationSummaryPrice.yieldsFee ? (
        <BookingModificationSummaryRow
          price={bookingModificationSummaryPrice.yieldsFee}
          text={texts.yieldsFee}
          isExtra
        />
      ) : null
    }
    <hr className={s.horizontalRule} />
    <BookingModificationSummaryRow
      price={bookingModificationSummaryPrice.total}
      text={texts.total}
      textClassName={`${s.bold} ${s.bigText}`}
      priceClassName={s.bigPrice}

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

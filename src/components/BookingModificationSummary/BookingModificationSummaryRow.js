import React from 'react';
import PropTypes from 'prop-types';

import s from './BookingModificationSummaryRow.css';

const BookingModificationSummaryRow = ({
  text, price, isExtra, className, textClassName, priceClassName,
}) => (
  <div className={`${s.summaryRow} ${className}`}>
    <p className={`${s.summaryRowText} ${textClassName}`}>{text}</p>
    <p className={`${s.summaryRowPrice} ${priceClassName}`}>
      {isExtra ? '+' : ''}{parseFloat(price).toFixed(2)}€
    </p>
  </div>
);

BookingModificationSummaryRow.defaultProps = {
  isExtra: false,
  textClassName: '',
  priceClassName: '',
  className: '',
};

BookingModificationSummaryRow.propTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isExtra: PropTypes.bool,
  textClassName: PropTypes.string,
  priceClassName: PropTypes.string,
  className: PropTypes.string,
};

export default BookingModificationSummaryRow;

import React from 'react';
import PropTypes from 'prop-types';

import s from './BookingModificationSummaryRow.css';

const BookingModificationSummaryRow = ({
  text, price, isExtra, bold, total, className,
}) => {
  let textClassName = total ? `${s.bigText}` : '';
  textClassName += bold ? ` ${s.bold}` : '';

  return (
    <div className={`${s.summaryRow} ${className}`}>
      <p className={textClassName}>{text}</p>
      <p className={total ? s.bigPrice : s.price}>{isExtra ? '+' : ''}{parseFloat(price).toFixed(2)}€</p>
    </div>
  );
};

BookingModificationSummaryRow.defaultProps = {
  isExtra: false,
  bold: false,
  total: false,
  className: '',
};

BookingModificationSummaryRow.propTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isExtra: PropTypes.bool,
  bold: PropTypes.bool,
  total: PropTypes.bool,
  className: PropTypes.string,
};

export default BookingModificationSummaryRow;

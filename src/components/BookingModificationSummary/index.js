import React from 'react';
import PropTypes from 'prop-types';
import BookingModificationSummaryRow from './BookingModificationSummaryRow';
import RideSummaryTextType, { defaultTexts } from './BookingModificationSummaryTextsType';

import s from './BookingModificationSummary.css';

const BookingModificationSummary = ({ texts, className }) => (
  <div className={`${s.bookingModificationSummaryContainer} ${className}`}>
    <BookingModificationSummaryRow
      price={39}
      text="Prix initial"
      bold
    />
    <hr className={s.horizontalRule} />
    <BookingModificationSummaryRow
      price={10}
      text="Durée de stationnement supplémentaire"
      isExtra
    />
    <BookingModificationSummaryRow
      price={15}
      text="Acheminement"
      isExtra
    />
    <BookingModificationSummaryRow
      price={10}
      text="Frais de dossier*"
      isExtra
    />
    <hr className={s.horizontalRule} />
    <BookingModificationSummaryRow
      price={35}
      text="Total reste à payer"
      total
    />
  </div>
);

BookingModificationSummary.defaultProps = {
  className: '',
  texts: defaultTexts,
};

BookingModificationSummary.propTypes = {
  texts: RideSummaryTextType,
  className: PropTypes.string,
};

export default BookingModificationSummary;

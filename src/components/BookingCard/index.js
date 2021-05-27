import React from 'react';
import PropTypes from 'prop-types';
import { Card, BookingSteps, PricingSummary } from '..';
import BookingStepsTextsType, {
  defaultTexts as bookingStepsDefaultTexts,
} from '../BookingSteps/BookingStepsTextsType';
import PricingSummaryOptionType from '../PricingSummary/PricingSummaryOptionType';
import PricingSummaryTextsType from '../PricingSummary/PricingSummaryTextsType';
import BookingCardFooter from './BookingCardFooter';

import s from './BookingCard.module.css';

const BookingCard = ({
  fromSpot,
  toSpot,
  startAt,
  endAt,
  bookingStepsTexts,
  options,
  pricingSummaryTexts,
  leftActions,
  rightAction,
  className,
}) => {
  const footer = (
    <BookingCardFooter leftActions={leftActions} rightAction={rightAction} />
  );

  return (
    <Card className={className} FooterChildren={footer}>
      <div className={s.container}>
        <div className={s.bookingSteps}>
          <BookingSteps
            fromSpot={fromSpot}
            toSpot={toSpot}
            startAt={startAt}
            endAt={endAt}
            texts={bookingStepsTexts}
          />
        </div>

        <div className={s.pricingSummary}>
          <PricingSummary
            currency="€"
            currencyPosition="after"
            options={options}
            texts={pricingSummaryTexts}
          />
        </div>
      </div>
    </Card>
  );
};

BookingCard.defaultProps = {
  leftActions: [],
  rightAction: null,
  className: '',
  bookingStepsTexts: bookingStepsDefaultTexts,
};

BookingCard.propTypes = {
  fromSpot: PropTypes.string.isRequired,
  toSpot: PropTypes.string.isRequired,
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string.isRequired,
  bookingStepsTexts: BookingStepsTextsType,
  options: PropTypes.arrayOf(PricingSummaryOptionType).isRequired,
  pricingSummaryTexts: PricingSummaryTextsType.isRequired,
  leftActions: PropTypes.arrayOf(PropTypes.node),
  rightAction: PropTypes.node,
  className: PropTypes.string,
};

export default BookingCard;

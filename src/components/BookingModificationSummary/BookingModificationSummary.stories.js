import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { object, withKnobs } from '@storybook/addon-knobs';

import BookingModificationSummary from '.';
import { defaultTexts } from './BookingModificationSummaryTextsType';

const bookingModificationSummaryPrice = {
  routingFee: 69,
  parkingFee: 20,
  administrativeFee: 15,
  leftToPay: 104,
  initialPrice: 39,
};

storiesOf('BookingModificationSummary', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      texts: object('Texts', defaultTexts),
      bookingModificationSummaryPrice: object(
        'Booking modifications',
        bookingModificationSummaryPrice
      ),
    };

    return <BookingModificationSummary {...props} />;
  });

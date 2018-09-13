import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, text, object } from '@storybook/addon-knobs';

import BookingCard from './';
import ActionLink from '../ActionLink';
import LinkUnderlined from '../LinkUnderlined';
import { defaultTexts as defaultBookingStepsTexts } from '../BookingSteps/BookingStepsTextsType';
import { defaultTexts as defaultPricingSummaryTexts } from '../PricingSummary/PricingSummaryTextsType';

const options = [
  { label: 'Parking + Voiturier', price: 64 },
  { label: 'Parking couvert', price: 9 },
  { label: 'Cagnotte', price: -3 },
];

const leftActions = [
  <ActionLink label="Modifier" />,
  <ActionLink label="Annuler" />,
];

const rightAction = <LinkUnderlined onClick={() => {}}>Télécharger la facture</LinkUnderlined>;

storiesOf('BookingCard', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      fromSpot: text('From spot', 'Paris Gare de l’Est'),
      toSpot: text('To spot', 'Paris Gare de l’Est'),
      startAt: text('Start at', 'Ven. 20 avril à 15:00'),
      endAt: text('End at', 'Dim. 22 avril à 15:00'),
      bookingStepsTexts: object('Texts', defaultBookingStepsTexts),
      options: object('Options', options),
      pricingSummaryTexts: object('Pricing summary texts', defaultPricingSummaryTexts),
      leftActions,
      rightAction,
    };

    return <BookingCard {...props} />;
  });

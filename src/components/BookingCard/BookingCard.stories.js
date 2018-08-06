import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import BookingCard from './';
import ActionLink from '../ActionLink';
import LinkUnderlined from '../LinkUnderlined';

const bookingStepsTexts = {
  pickup: 'Prise en charge',
  return: 'Restitution',
};

const options = [
  { label: 'Parking + Voiturier', price: 64 },
  { label: 'Parking couvert', price: 9 },
  { label: 'Cagnotte', price: -3 },
];

const pricingSummaryTexts = {
  addOption: 'Ajouter une option',
  total: 'Total TTC',
};

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

  .add('normal', () => (
    <BookingCard
      fromSpot="Paris Gare de l’Est"
      toSpot="Paris Gare de l’Est"
      startAt="Ven. 20 avril à 15:00"
      endAt="Dim. 22 avril à 15:00"
      bookingStepsTexts={bookingStepsTexts}
      options={options}
      pricingSummaryTexts={pricingSummaryTexts}
      leftActions={leftActions}
      rightAction={rightAction}
    />
  ));

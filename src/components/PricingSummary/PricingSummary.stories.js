import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import PricingSummary from './';

const options = [
  { label: 'Parking + Voiturier', price: 64 },
  { label: 'Parking couvert', price: 9 },
  { label: 'Cagnotte', price: -3 },
];

const texts = {
  addOption: 'Ajouter une option',
  total: 'Total TTC',
};

storiesOf('PricingSummary', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('normal', () => (
    <PricingSummary
      currency="€"
      currencyPosition="after"
      options={options}
      texts={texts}
      onAddClick={action('AddClick')}
    />
  ))

  .add('currency before', () => (
    <PricingSummary
      currency="$"
      currencyPosition="before"
      options={options}
      texts={texts}
      onAddClick={action('AddClick')}
    />
  ));

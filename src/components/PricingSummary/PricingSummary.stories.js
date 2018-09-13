import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, object, select, text } from '@storybook/addon-knobs';

import PricingSummary from './';
import { defaultTexts } from './PricingSummaryTextsType';

const options = [
  { label: 'Parking + Voiturier', price: 64 },
  { label: 'Parking couvert', price: 9 },
  { label: 'Cagnotte', price: -3 },
];

storiesOf('PricingSummary', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      currency: text('Currency symbol', '€'),
      currencyPosition: select('Currency position', ['before', 'after'], 'after'),
      texts: object('Texts', defaultTexts),
      onAddClick: action('Add option clicked'),
      options,
    };

    return <PricingSummary {...props} />;
  });

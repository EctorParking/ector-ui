import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';

import AlternativeTimeCard from './';

const texts = {
  select: 'Sélectionner',
};

const alternative = {
  date: 'Sam. 10 juillet 2018',
  time: '15h10',
  spot: 'Lyon St Exupéry',
};

storiesOf('AlternativeTimeCard', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('normal', () => (
    <AlternativeTimeCard
      texts={texts}
      alternative={alternative}
      mode="normal"
      onSelect={action('Selected')}
    />
  ))

  .add('selectedWithFooter', () => (
    <AlternativeTimeCard
      texts={texts}
      alternative={alternative}
      mode="selectedWithFooter"
      onSelect={action('Selected')}
    />
  ))

  .add('selectedWithoutFooter', () => (
    <AlternativeTimeCard
      texts={texts}
      alternative={alternative}
      mode="selectedWithoutFooter"
      onSelect={action('Selected')}
    />
  ));

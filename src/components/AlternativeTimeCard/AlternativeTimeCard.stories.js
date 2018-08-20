import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, select } from '@storybook/addon-knobs';

import AlternativeTimeCard from './';

const DefaultTexts = {
  select: 'Sélectionner',
};

const alternative = {
  date: 'Sam. 10 juillet 2018',
  time: '15h10',
  spot: 'Lyon St Exupéry',
};

const modes = ['normal', 'selectedWithFooter', 'selectedWithoutFooter'];

storiesOf('AlternativeTimeCard', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      alternative: object('Alternative', alternative),
      texts: object('Texts', DefaultTexts),
      mode: select('Mode', modes, 'normal'),
    };

    return (
      <AlternativeTimeCard
        onSelect={action('Selected')}
        {...props}
      />
    );
  });

import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';

import GenderPicker from '.';

const genders = [
  { value: 'male', label: 'M' },
  { value: 'female', label: 'Mme' },
];

storiesOf('GenderPicker', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)

  .add('normal', () => (
    <GenderPicker genders={genders} />
  ));

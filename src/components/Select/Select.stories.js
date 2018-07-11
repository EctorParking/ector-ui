import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import Select from './';

const values = [
  { value: 'fr', label: '+33', image: './images/flags/fr.png' },
  { value: 'en', label: '+01', image: './images/flags/uk.png' },
];

storiesOf('Select', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('basic', () => (
    <Select
      values={values}
      selected={values[0].value}
    />
  ))

  .add('with image', () => (
    <Select
      values={values}
      selected={values[0].value}
      hasImage
    />
  ));

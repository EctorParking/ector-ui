import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';

import InputCheckbox from '.';

storiesOf('Input.Checkbox', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
      { name: 'red', value: 'red', default: false },
    ],
  })
  .addDecorator(centered)

  .add('basic', () => (
    <InputCheckbox onChange={action('onChange')}>
            Voyage professionnel
    </InputCheckbox>
  ))

  .add('checked', () => (
    <InputCheckbox onChange={action('onChange')} checked>
            Voyage professionnel
    </InputCheckbox>
  ));

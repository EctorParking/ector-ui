import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';

import InputCheckbox from './';

storiesOf('Input.Checkbox', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
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


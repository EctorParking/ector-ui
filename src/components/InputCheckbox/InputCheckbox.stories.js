import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import InputCheckbox from './';

storiesOf('Input.Checkbox', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('basic', () => (
    <InputCheckbox>
            Voyage professionnel
    </InputCheckbox>
  ));


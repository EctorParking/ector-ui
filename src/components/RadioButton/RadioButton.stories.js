import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import RadioButton from './';

storiesOf('RadioButton', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('normal', () => (
    <div>
      <RadioButton
        label="Option 1"
        name="example"
        value="option-1"
        onSelect={action('Selected option 1')}
      />
      <RadioButton
        label="Option 2"
        name="example"
        value="option-2"
        onSelect={action('Selected option 2')}
      />
    </div>
  ))

  .add('checked', () => (
    <div>
      <RadioButton
        label="Option 1"
        name="example"
        value="option-1"
        checked
        onSelect={action('Selected option 1')}
      />
      <RadioButton
        label="Option 2"
        name="example"
        value="option-2"
        onSelect={action('Selected option 2')}
      />
    </div>
  ));

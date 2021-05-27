import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';

import Input from '.';

storiesOf('Input', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)

  .add('with placeholder', () => (
    <Input type="text" placeholder="AB 000" id="return-input" />
  ))

  .add('without placeholder', () => <Input type="text" />);

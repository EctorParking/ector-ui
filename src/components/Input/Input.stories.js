import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import Input from './';


storiesOf('Input', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('with placeholder', () => (
    <Input
      type="text"
      placeholder="AB 000"
      id="return-input"
    />
  ))

  .add('without placeholder', () => (
    <Input type="text" />
  ));

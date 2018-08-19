import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import InputLabel from './';


storiesOf('Input.Label', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('normal', () => (
    <InputLabel label="Aller" />
  ))

  .add('important', () => (
    <InputLabel mandatory label="Retour" />
  ))

  .add('with placeholder', () => (
    <InputLabel
      id="StartInput"
      placeHolder="AB 000"
      label="Aller"
    />
  ));

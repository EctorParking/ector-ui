import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';

import RoundedButton from './';


storiesOf('RoundedButton', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => (
    <RoundedButton onClick={() => { console.log('clicked'); }} text="Choisir" />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import Label from './';


storiesOf('Label', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('deepBlue', () => (
    <Label
      label="Label"
      logo="star"
      color="deepBlue"
    />
  ))
  .add('green', () => (
    <Label
      label="Label"
      logo="star"
      color="green"
    />
  ))
  .add('red', () => (
    <Label
      label="Populaire"
      logo="heart"
      color="red"
    />
  ))
  .add('blue', () => (
    <Label
      label="Label"
      logo="heart"
      color="blue"
    />
  ))
  .add('melrose', () => (
    <Label
      label="Label"
      logo="heart"
      color="melrose"
    />
  ));

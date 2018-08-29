import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import InputLabel from './';


storiesOf('Input.Label', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('normal', () => (
    <InputLabel label="Aller" />
  ))

  .add('left', () => (
    <InputLabel left label="Retour" />
  ))

  .add('With knobs', () => {
    const props = {
      mandatory: boolean('Mandatory', false),
      placeholder: text('Placeholder', 'AB 000'),
      label: text('Label', 'Plaque d\'immatriculation'),
      id: text('Id', 'Input'),
      left: boolean('Left', false),
      error: text('Error', ''),
    };

    return (
      <InputLabel {...props} />
    );
  })

  .add('with error', () => (
    <InputLabel label="Aller" error="Champ invalide" />
  ));

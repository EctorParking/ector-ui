import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import InputButton from './';


storiesOf('InputButton', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('with help text', () => (
    <InputButton
      buttonText="Envoyez 20€"
      placeholder="Entrez une adresse mail"
      helpText="Cliquez sur envoyer"
    />
  ))

  .add('without help text', () => (
    <InputButton
      buttonText="Envoyez 20€"
      placeholder="Entrez une adresse mail"
    />
  ))
  .add('error', () => (
    <InputButton
      buttonText="Envoyez 20€"
      placeholder="Entrez une adresse mail"
      error="Email invalide"
      helpText="Cliquez sur envoyer"
    />
  ));

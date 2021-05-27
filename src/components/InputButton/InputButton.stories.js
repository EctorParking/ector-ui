import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';

import InputButton from '.';
import s from './InputButton.module.css';

storiesOf('InputButton', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)

  .add('with help text', () => (
    <InputButton
      buttonText="Envoyez 20€"
      placeholder="Entrez une adresse mail"
      hasError={false}
      IconComponent={({ className }) => <span className={className}>€</span>}
      SubTextComponent={() => (
        <p className={s.helpTextClassname}>Cliquez sur envoyer</p>
      )}
    />
  ))

  .add('without help text', () => (
    <InputButton
      buttonText="Envoyez 20€"
      placeholder="Entrez une adresse mail"
      hasError={false}
    />
  ))
  .add('error', () => (
    <InputButton
      buttonText="Envoyez 20€"
      placeholder="Entrez une adresse mail"
      hasError
      SubTextComponent={() => <div className={s.error}>Email invalide</div>}
    />
  ));

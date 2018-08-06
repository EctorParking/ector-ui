import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import ServiceCard from './';


storiesOf('ServiceCard', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('normal', () => (
    <ServiceCard
      title="Option 1"
      description="Small description ndeaznd dheoz ado ezhd heizandieazd eizan diez deiandeizndi dei andienzdij ezniadneziandeia dnijz anidenziad niz"
      price={120}
      actionFooter={() => {}}
      buttonLabelFooter="Ajouter"
    />
  ))

  .add('selected', () => (
    <ServiceCard
      title="Option 1"
      description="Small description"
      price={120}
      actionFooter={() => {}}
      buttonLabelFooter="Supprimer"
      isSubscribed
    />
  ))

  .add('normal with label', () => (
    <ServiceCard
      title="Option 1"
      description="Small description"
      price={120}
      actionFooter={() => {}}
      buttonLabelFooter="Supprimer"
      labelColor="green"
      labelLogo="star"
      labelText="Populaire"
    />
  ))

  .add('selected with label', () => (
    <ServiceCard
      title="Option 1"
      description="Small description"
      price={120}
      actionFooter={() => {}}
      buttonLabelFooter="Supprimer"
      labelColor="green"
      labelLogo="star"
      labelText="Populaire"
      isSubscribed
    />
  ));

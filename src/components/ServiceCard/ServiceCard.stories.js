import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { action } from '@storybook/addon-actions';
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
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      price={120.99}
      actionFooter={action('add')}
      openShowMore={action('showMore')}
      buttonLabelFooter="Ajouter"
    />
  ))

  .add('selected', () => (
    <ServiceCard
      title="Option 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      price={120.00}
      actionFooter={action('remove')}
      openShowMore={action('showMore')}
      buttonLabelFooter="Supprimer"
      isSubscribed
    />
  ))

  .add('normal with label', () => (
    <ServiceCard
      title="Option 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      price={120.00}
      actionFooter={action('add')}
      openShowMore={action('showMore')}
      buttonLabelFooter="Supprimer"
      labelColor="green"
      labelLogo="star"
      labelText="Populaire"
    />
  ))

  .add('selected with label', () => (
    <ServiceCard
      title="Option 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      price={120.00}
      actionFooter={action('remove')}
      buttonLabelFooter="Supprimer"
      labelColor="green"
      labelLogo="star"
      labelText="Populaire"
      isSubscribed
    />
  ));

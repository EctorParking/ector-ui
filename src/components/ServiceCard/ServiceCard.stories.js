import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import ServiceCard from './';

const colors = ['deepBlue', 'green', 'red', 'melrose', 'blue'];

storiesOf('ServiceCard', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

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

  .add('selected without button', () => (
    <ServiceCard
      title="Option 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      price={120.00}
      actionFooter={action('remove')}
      openShowMore={action('showMore')}
      buttonLabelFooter="Supprimer"
      isSubscribed
      showButton={false}
    />
  ))

  .add('normal with label', () => (
    <ServiceCard
      title="Option 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      price={120.00}
      actionFooter={action('add')}
      openShowMore={action('showMore')}
      buttonLabelFooter="Ajouter"
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
  ))

  .add('with knobs', () => {
    const props = {
      title: text('Title', 'Option 1'),
      description: text('Description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
      price: number('Price', 120.99),
      actionFooter: action('add'),
      openShowMore: action('showMore'),
      buttonLabelFooter: text('Button label footer', 'Ajouter'),
      isSubscribed: boolean('Is subscribed', false),
      knowMoreLabel: text('Know more label', 'En savoir plus'),
      labelColor: select('Label color', colors, colors[0]),
      labelLogo: text('Label logo', 'star'),
      labelText: text('Label text', 'Populaire'),
    };

    return <ServiceCard {...props} />;
  });

import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import ServiceCard from '.';

const colors = ['primary', 'success', 'error', 'action', 'blue'];

storiesOf('ServiceCard', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('normal', () => (
    <ServiceCard
      title="Option 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      PriceComponent={<span>120,99 €</span>}
      actionFooter={action('add')}
      openShowMore={action('showMore')}
      buttonLabelFooter="Ajouter"
    />
  ))

  .add('selected', () => (
    <ServiceCard
      title="Option 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      PriceComponent={<span>120,00 €</span>}
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
      PriceComponent={<span>120,00 €</span>}
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
      PriceComponent={<span>120,00 €</span>}
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
      PriceComponent={<span>120,00 €</span>}
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
      description: text(
        'Description',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      ),
      PriceComponent: <span>120,99 €</span>,
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

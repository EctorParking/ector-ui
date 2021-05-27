import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text, object } from '@storybook/addon-knobs';

import ApplicationCard from '.';

const urls = {
  googlePlay: 'http://www.google.fr',
  appStore: 'http://www.apple.com/fr',
};

storiesOf('ApplicationCard', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      title: text('Title', 'Téléchargez l’application'),
      description: text(
        'Description',
        'Gérez vos réservations plus facilement depuis l’application.'
      ),
      urls: object('URLs', urls),
    };

    return <ApplicationCard {...props} />;
  });

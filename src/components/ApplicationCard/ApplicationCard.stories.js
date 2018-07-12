import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import ApplicationCard from './';

const urls = {
  googlePlay: 'http://www.google.fr',
  appStore: 'http://www.apple.com/fr',
};

storiesOf('ApplicationCard', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('normal', () => (
    <ApplicationCard
      title="Téléchargez l’application"
      description="Gérez vos réservations plus facilement depuis l’application."
      urls={urls}
    />
  ));

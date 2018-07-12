import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import ReferralCard from './';

const texts = {
  title: 'Aidez Ector à conquérir le monde',
  description: 'Devenez parrain Ector et faites profiter à votre filleul de 10€ offert lors de sa première réservation',
};

storiesOf('ReferralCard', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('normal', () => (
    <ReferralCard texts={texts} />
  ));

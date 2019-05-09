import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text, array } from '@storybook/addon-knobs';

import BookingSteps from '.';

storiesOf('BookingSteps', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      pickupDescriptions: array('Pickup descriptions', [
        'Paris Gare de l’Est',
        'Ven. 20 avril à 15:00',
      ]),
      returnDescriptions: array('Return descriptions', [
        'Paris Gare de l’Est',
        'Dim. 22 avril à 15:00',
        'Train n°1234',
      ]),
      pickupTitle: text('Pickup title', 'Aller'),
      returnTitle: text('Return title', 'Retour'),
    };

    return <BookingSteps {...props} />;
  });

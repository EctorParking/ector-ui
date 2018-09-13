import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, text, object } from '@storybook/addon-knobs';

import BookingSteps from './';
import { defaultTexts } from './BookingStepsTextsType';

storiesOf('BookingSteps', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      fromSpot: text('From spot', 'Paris Gare de l’Est'),
      toSpot: text('To spot', 'Paris Gare de l’Est'),
      startAt: text('Start at', 'Ven. 20 avril à 15:00'),
      endAt: text('End at', 'Dim. 22 avril à 15:00'),
      texts: object('Texts', defaultTexts),
    };

    return <BookingSteps {...props} />;
  });

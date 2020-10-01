import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text, array } from '@storybook/addon-knobs';
import ActionLink from '../ActionLink';

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
        <div style={{ display: 'flex' }}>
          <span key="Paris Gare de l’Est">Paris Gare de l’Est</span>
          <ActionLink label="Localiser le lieu de rdv" />
        </div>,
        <span key="Paris Gare de l’Est">Ven. 20 avril à 15:00</span>,
      ]),
      returnDescriptions: array('Return descriptions', [
        <span key="Paris Gare de l’Est">Paris Gare de l’Est</span>,
        <span key="Paris Gare de l’Est">Dim. 22 avril à 15:00</span>,
        <span key="Paris Gare de l’Est">Train n°1234</span>,
      ]),
      pickupTitle: text('Pickup title', 'Aller'),
      returnTitle: text('Return title', 'Retour'),
    };

    return <BookingSteps {...props} />;
  });

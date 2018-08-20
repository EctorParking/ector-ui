import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import CardTravelInformation from './';


storiesOf('Card.TravelInformation', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const texts = object('Texts', {
      title: 'Numéro de Vol / Train',
      outwardPlaceholder: 'AB 000',
      outwardLabel: 'Aller',
      returnPlaceholder: 'AB 0000',
      returnLabel: 'Retour',
      businessTravel: 'Voyage professionel',
      mandatoryFields: '* Champs obligatoires',
    });

    return (
      <CardTravelInformation texts={texts} />
    );
  });

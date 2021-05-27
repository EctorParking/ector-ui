import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import centered from '@storybook/addon-centered';
import { withKnobs, object, boolean } from '@storybook/addon-knobs/react';

import { DefaultTexts } from './CarCardTextsType';

import CarCard from '.';

storiesOf('CarCard', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('With Knobs', () => {
    const props = {
      car: object('Car', {
        name: 'Audi A3',
        numberPlate: 'TB-894-LI',
        color: 'Noir',
      }),
      texts: object('Texts', DefaultTexts),
      editable: boolean('Editable', false),
      deletable: boolean('Deletable', false),
      pendingModification: boolean('Pending Modification', false),
      pendingDeletion: boolean('Pending Deletion', false),
      selected: boolean('Selected', false),
      onClick: action('clicked'),
    };

    return <CarCard {...props} />;
  });

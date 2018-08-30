import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, object, boolean } from '@storybook/addon-knobs/react';

import { DefaultTexts } from './CarCardTextsType';

import CarCard from './';

storiesOf('CarCard', module)
  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('With Knobs', () => {
    const props = {
      car: object('Car', {
        name: 'Audi A3',
        numberPlate: 'TB-894-LI',
      }),
      texts: object('Texts', DefaultTexts),
      editable: boolean('Editable', false),
      pendingModification: boolean('Pending Modification', false),
      deletable: boolean('Deletable', false),
      selected: boolean('Selected', false),
      onClick: action('clicked'),
    };

    return (
      <CarCard {...props} />
    );
  });

import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { DefaultTexts } from './CardTravelInformationTextsType';

import CardTravelInformation from './';


storiesOf('CardTravelInformation', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('With Knobs', () => {
    const texts = object('Texts', DefaultTexts);
    const values = object('Values', {
      travelingNumberFrom: '',
      travelingNumberTo: '',
    });

    return (
      <CardTravelInformation texts={texts} values={values} />
    );
  });

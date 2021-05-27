import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { DefaultTexts } from './CardTravelInformationTextsType';

import CardTravelInformation from '.';

storiesOf('CardTravelInformation', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('With Knobs', () => {
    const props = {
      texts: object('Texts', DefaultTexts),
      values: object('Values', {
        travelingNumberFrom: '',
        travelingNumberTo: '',
        returnFlightCompany: '',
        returnFlightOrigin: '',
      }),
      errors: object('Errors', {
        travelingNumberFrom: '',
        travelingNumberTo: '',
      }),
    };

    return <CardTravelInformation {...props} />;
  });

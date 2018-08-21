import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { DefaultTexts } from './CardTravelInformationTextsType';

import CardTravelInformation from './';


storiesOf('Card.TravelInformation', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('basic', () => {
    const texts = object('Texts', DefaultTexts);

    return (
      <CardTravelInformation texts={texts} />
    );
  });

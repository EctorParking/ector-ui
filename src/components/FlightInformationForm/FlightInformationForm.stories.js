import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';

import FlightInformationForm from '.';

storiesOf('FlightInformationForm', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {};

    return <FlightInformationForm {...props} />;
  });

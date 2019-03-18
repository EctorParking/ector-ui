import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, object } from '@storybook/addon-knobs';
import { defaultValues } from './RegistrationFormTextTypes';

import RegistrationForm from '.';

storiesOf('RegistrationForm', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      texts: object('Texts'),
      values: object('Values', defaultValues),
      errors: object('Errors'),
    };

    return <RegistrationForm {...props} />;
  });

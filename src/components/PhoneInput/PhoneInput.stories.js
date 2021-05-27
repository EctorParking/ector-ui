import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import centered from '@storybook/addon-centered';

import PhoneInput from '.';

storiesOf('PhoneInput', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)

  .add('Basic', () => (
    <PhoneInput
      onCountryCodeChange={action('Country code changed')}
      onPhoneNumberChange={action('Phone number changed')}
    />
  ));

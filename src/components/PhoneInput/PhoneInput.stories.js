import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import PhoneInput from './';

storiesOf('PhoneInput', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('basic', () => (
    <PhoneInput
      countryCode="fr"
      onCountryCodeChange={action('Country code changed')}
      onPhoneNumberChange={action('Phone number changed')}
    />
  ));

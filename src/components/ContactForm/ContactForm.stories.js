import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { DefaultTexts } from './ContactFormTextsType';

import ContactForm from './';

storiesOf('ContactForm', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('normal', () => {
    const props = {
      texts: object('Textes', DefaultTexts),
      values: object('Values', {
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        phone: '',
        postalCode: '',
      }),
      errors: object('Errors', {
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        phone: '',
        postalCode: '',
      }),
    };

    return (
      <ContactForm {...props} onChangeProperty={action('change-property')} />
    );
  });

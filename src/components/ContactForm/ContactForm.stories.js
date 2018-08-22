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
    const texts = object('Textes', DefaultTexts);
    const values = object('Values', {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      phoneNumber: '',
      postalCode: '',
    });

    return (
      <ContactForm texts={texts} values={values} onChangeProperty={action('change-property')} />
    );
  });

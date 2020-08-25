import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import {
  withKnobs, object, select, boolean, text,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { DefaultTexts } from './ContactFormTextsType';

import ContactForm from '.';

storiesOf('ContactForm', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('normal', () => {
    const props = {
      texts: object('Textes', DefaultTexts),
      tooltip: text('Tooltip', 'test'),
      languages: [{ locale: 'fr', name: 'Français' }, { locale: 'en', name: 'English' }],
      showCommunicationLocaleInput: boolean('Voir champs langue', true),
      values: object('Values', {
        firstName: '',
        lastName: '',
        email: '',
        title: '',
        phone: '',
        postalCode: '',
        communicationLocale: '',
      }),
      errors: object('Errors', {
        firstName: '',
        lastName: '',
        email: '',
        title: '',
        phone: '',
        postalCode: '',
        communicationLocale: '',
      }),
      labelPosition: select('Label Position', {
        left: 'Left',
        top: 'Top',
      }, 'left'),
    };

    return (
      <ContactForm {...props} onChangeProperty={action('change-property')} />
    );
  });

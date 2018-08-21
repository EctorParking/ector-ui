import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { DefaultTexts } from './ContactFormTextsType';

import ContactForm from './';

const texts = DefaultTexts;

storiesOf('ContactForm', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('normal', () => (
    <ContactForm texts={texts} />
  ));

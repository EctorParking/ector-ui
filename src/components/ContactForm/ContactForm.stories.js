import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, object } from '@storybook/addon-knobs';

import ContactForm from './';
import { defaultTexts } from './ContactFormTextsType';

storiesOf('ContactForm', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      texts: object('Texts', defaultTexts),
    };

    return <ContactForm {...props} />;
  });

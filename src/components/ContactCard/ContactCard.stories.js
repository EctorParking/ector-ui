import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, object, boolean } from '@storybook/addon-knobs/react';

import { defaultTexts } from './ContactCardTextsType';
import ContactCard from './';

storiesOf('ContactCard', module)
  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      contact: object('Contact', {
        firstName: 'Jean',
        lastName: 'Dupont',
        email: 'jeandupont@gmail.com',
        phoneNumber: '+33 6 12 15 32 54',
        gender: 'male',
      }),
      texts: object('Texts', defaultTexts),
      editable: boolean('Editable', false),
      pendingModification: boolean('Pending modification', false),
      deletable: boolean('Deletable', false),
      selected: boolean('Selected', false),
    };


    return (
      <ContactCard {...props} />
    );
  });

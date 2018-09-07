import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, object, boolean } from '@storybook/addon-knobs/react';

import { DefaultTexts } from './ContactCardTextsType';
import ContactCard from './';

storiesOf('ContactCard', module)
  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('With Knobs', () => {
    const props = {
      contact: object('Contact', {
        firstname: 'Jean',
        lastname: 'Dupont',
        email: 'jeandupont@gmail.com',
        phone: '+33 6 12 15 32 54',
        title: 'male',
      }),
      formValues: object('Form values', {
        email: 'jeandupont@gmail.com',
        phone: '+33 6 12 15 32 54',
      }),
      texts: object('Texts', DefaultTexts),
      editable: boolean('Editable', false),
      deletable: boolean('Deletable', false),
      pendingModification: boolean('Pending modification', false),
      pendingDeletion: boolean('Pending Deletion', false),
      selected: boolean('Selected', false),
    };


    return (
      <ContactCard {...props} />
    );
  });

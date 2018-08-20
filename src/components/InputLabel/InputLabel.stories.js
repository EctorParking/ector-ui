import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import InputLabel from './';


storiesOf('Input.Label', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      label: text('Label', 'Retour'),
      placeholder: text('Placeholder', 'AB 000'),
      mandatory: boolean('Mandatory', false),
      id: text('ID', 'StartInput'),
    };

    return <InputLabel {...props} />;
  });

import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs';

import InformationAlert from '.';

storiesOf('InformationAlert', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      title: text('Title', 'Information Alert'),
      description: text('Description', "Description de l'information"),
    };

    return <InformationAlert {...props} />;
  });

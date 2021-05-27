import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs';
import Picker from '.';

storiesOf('Picker', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      error: text('Error', ''),
      info: text('Info', ''),
    };

    return <Picker {...props} />;
  });

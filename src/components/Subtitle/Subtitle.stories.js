import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs';

import Subtitle from '.';

storiesOf('Subtitle', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      label: text('Label', 'Voyageur'),
    };

    return <Subtitle {...props} />;
  });

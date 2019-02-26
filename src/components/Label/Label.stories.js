import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import Label from './';

const colors = ['deepBlue', 'green', 'red', 'melrose', 'blue', 'lightGrey', 'metalGrey', 'darkMetalGrey', 'aquaHazeGrey', 'orange'];

storiesOf('Label', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      label: text('Label', 'Label'),
      logo: text('Icon', 'star'),
      color: select('Color', colors, colors[0]),
    };

    return <Label {...props} />;
  });

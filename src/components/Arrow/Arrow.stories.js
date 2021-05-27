import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs, select } from '@storybook/addon-knobs';

import Arrow from '.';

storiesOf('Arrow', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const positions = {
      Top: 'top',
      Bottom: 'bottom',
      Left: 'left',
      Right: 'right',
    };

    const props = {
      position: select('Position', positions, positions[0]),
    };

    return <Arrow {...props} />;
  });

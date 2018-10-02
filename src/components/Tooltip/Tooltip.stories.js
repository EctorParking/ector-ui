import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs';

import Tooltip from './';


storiesOf('Tooltip', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      text: text('Tooltip', 'Tooltip'),
      iconClassName: text('Icon', 'icon-ec-info'),
      position: text('Position', 'bottom'),
      tooltipWidth: text('Width', 'medium'),
    };

    return <Tooltip {...props} />;
  });

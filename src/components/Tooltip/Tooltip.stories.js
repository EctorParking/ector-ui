import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import Tooltip from '.';

const positionOptions = {
  bottom: 'bottom',
  left: 'left',
  top: 'top',
  right: 'right',
};
const sizeOptions = {
  xSmall: 'xSmall',
  small: 'small',
  medium: 'medium',
  larger: 'larger',
};
const visibleOptions = {
  visible: true,
  hidden: false,
};

storiesOf('Tooltip', module)
  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      text: text('Tooltip', 'Tooltip'),
      iconClassName: text('Icon', 'icon-ec-info'),
      position: select('Position', positionOptions, 'bottom'),
      tooltipSize: select('Size', sizeOptions, 'medium'),
      visible: select('Visible', visibleOptions, false),
    };

    return <Tooltip {...props} />;
  });

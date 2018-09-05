import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, object, boolean } from '@storybook/addon-knobs/react';
import Colors from './Colors';

import ColorPicker from './';

storiesOf('ColorPicker', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(withKnobs)
  .addDecorator(centered)

  .add('normal', () => {
    const props = {
      colors: object('ColorsList', Colors),
      showTooltip: boolean('ShowTooltip', true),
      selected: object('Selected', Colors[0]),
    };

    return (
      <ColorPicker
        onSelect={action('chosen')}
        {...props}
      />
    );
  });

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, object, boolean, text } from '@storybook/addon-knobs/react';
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
      value: text('Value', Colors[3].hexadecimalCode),
    };

    return (
      <ColorPicker
        onSelect={action('chosen')}
        {...props}
      />
    );
  });

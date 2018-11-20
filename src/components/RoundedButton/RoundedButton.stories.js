import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import RoundedButton from './';


storiesOf('RoundedButton', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      text: text('Text', 'Choisir'),
      color: text('Color', '#ffcd02'),
      fetching: boolean('fetching', false),
      onClick: action('clicked'),
    };

    return (<RoundedButton {...props} />);
  });

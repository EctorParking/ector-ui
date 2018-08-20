import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Card from './';


storiesOf('Card', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      isSelected: boolean('Selected', false),
    };

    return (
      <Card {...props}>
        Content
      </Card>
    );
  })
  .add('with knobs & footer', () => {
    const props = {
      isSelected: boolean('Selected', false),
      FooterChildren: 'The Footer Node',
      onClick: action('clicked'),
    };

    return (
      <Card {...props}>
        Content
      </Card>
    );
  });

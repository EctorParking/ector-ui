import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from '.';

storiesOf('Button', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      children: text('Text', 'Rechercher'),
      title: text('Title', 'Accessibility title'),
      fetching: boolean('Fetching', false),
      className: text('Class name', ''),
      disabled: boolean('Disabled', false),
    };

    return <Button {...props} />;
  });

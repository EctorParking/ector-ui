import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Button from '.';

storiesOf('Button', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      animationDuration: number('Animation duration', 3),
      fetchingDelay: number('Fetching duration', 0.5),
      children: text('Text', 'Rechercher'),
      title: text('Title', 'Accessibility title'),
      fetching: boolean('Fetching', false),
      className: text('Class name', ''),
      disabled: boolean('Disabled', false),
    };

    return <Button {...props} />;
  });

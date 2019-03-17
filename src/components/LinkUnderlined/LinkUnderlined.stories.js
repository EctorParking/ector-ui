import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import LinkUnderlined from '.';

storiesOf('Link.Underlined', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      children: text('Text', 'Nouveau conducteur'),
      fetching: boolean('Fetching'),
    };

    return <LinkUnderlined {...props} />;
  });

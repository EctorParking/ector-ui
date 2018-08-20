import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs';

import LinkUnderlined from './';

storiesOf('Link.Underlined', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      children: text('Text', 'Nouveau conducteur'),
    };

    return <LinkUnderlined {...props} />;
  });

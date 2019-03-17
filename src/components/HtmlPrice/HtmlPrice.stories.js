import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { number, withKnobs } from '@storybook/addon-knobs/react';


import HtmlPrice from '.';


storiesOf('HtmlPrice', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      price: number('Price'),

    };

    return (
      <HtmlPrice
        {...props}
      />
    );
  });

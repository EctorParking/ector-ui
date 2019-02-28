import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { number, withKnobs } from '@storybook/addon-knobs/react';


import HtmlPrice from './';


storiesOf('HtmlPrice', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
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


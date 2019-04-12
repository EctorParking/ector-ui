import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs';
import Header from '.';

storiesOf('Header', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      imageUrl: text('Logo', 'https://cdn.ectorparking.com/images/5ca29581d66b5.svg'),
    };

    return <Header {...props} />;
  });

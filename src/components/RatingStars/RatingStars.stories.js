import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs/react';

import centered from '@storybook/addon-centered';

import RatingStars from '.';

storiesOf('RatingStars', module)

  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)

  .add('normal', () => {
    const props = {
      value: number('Valeur', 3),
    };

    return (
      <RatingStars {...props} />
    );
  });

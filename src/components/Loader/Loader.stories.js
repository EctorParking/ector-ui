import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, select } from '@storybook/addon-knobs';

import Loader from '.';

storiesOf('Loader', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      size: select(
        'Size',
        {
          xs: 'xs',
          sm: 'sm',
          md: 'md',
          lg: 'lg',
          xl: 'xl',
        },
        'md'
      ),
    };

    return <Loader {...props} />;
  });

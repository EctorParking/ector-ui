import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, select } from '@storybook/addon-knobs';

import Loader from './';


storiesOf('Loader', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      size: select('Size', {
        xSmall: 'xSmall', small: 'small', medium: 'medium', large: 'large',
      }, 'medium'),
    };

    return <Loader {...props} />;
  });

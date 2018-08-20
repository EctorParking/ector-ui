import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs';

import Title from './';

storiesOf('Title', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      label: text('Label', 'Récapitulatif de réservation'),
    };

    return <Title {...props} />;
  });

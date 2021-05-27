import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Title, { TitleVariants } from '.';

storiesOf('Title', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      label: text('Label', 'Récapitulatif de réservation'),
      htmlElement: select(
        'Element HTML',
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        'h1'
      ),
      variant: select('Variant', Object.keys(TitleVariants)),
    };

    return <Title {...props} />;
  });

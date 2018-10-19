import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import AddItemCard from './';

storiesOf('AddItemCard', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      label: text('Label', 'Label'),
      loading: boolean('Loading', false),
      center: boolean('Center', false),
      small: boolean('Small', false),
    };

    return <AddItemCard {...props} />;
  });

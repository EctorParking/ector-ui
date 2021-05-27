import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean, selectV2 } from '@storybook/addon-knobs';
import AddItemCard from '.';

storiesOf('AddItemCard', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      label: text('Label', 'Label'),
      isPaymentMethod: boolean('isPaymentMethod', false),
      isPending: boolean('isPending', false),
      loaderSize: selectV2(
        'loaderSize',
        ['xSmall', 'small', 'medium', 'large'],
        'small'
      ),
    };

    return <AddItemCard {...props} />;
  });

import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs';

import ActionLink from '.';

const onClick = () => {
  console.log('Clicked');
};

storiesOf('ActionLink', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      onClick,
      label: text('Label', 'Action Link'),
      icon: text('Icon', 'faq'),
    };

    return <ActionLink {...props} />;
  });

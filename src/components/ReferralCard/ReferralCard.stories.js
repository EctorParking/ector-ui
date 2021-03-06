import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, object } from '@storybook/addon-knobs';

import ReferralCard from '.';
import { defaultTexts } from './ReferralCardTextsType';

storiesOf('ReferralCard', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      texts: object('Texts', defaultTexts),
    };

    return <ReferralCard {...props} />;
  });

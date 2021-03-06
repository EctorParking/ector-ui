import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { object, select, withKnobs } from '@storybook/addon-knobs';

import RideSummary from '.';
import { defaultTexts } from './RideSummaryTextsType';

storiesOf('RideSummary', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      texts: object('Texts', defaultTexts),
      type: select('Type', ['in', 'out'], 'in'),
    };

    return <RideSummary {...props} />;
  });

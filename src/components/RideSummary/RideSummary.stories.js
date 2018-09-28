import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { object, withKnobs } from '@storybook/addon-knobs';

import RideSummary from './';
import { defaultTexts } from './RideSummaryTextsType';

storiesOf('RideSummary', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      texts: object('Texts', defaultTexts),
    };

    return (<RideSummary {...props} />);
  });

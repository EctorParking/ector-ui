import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import DateTimePicker from '.';

storiesOf('DateTimePicker', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      error: text('Error', ''),
      info: text('Info', ''),
      hasStartDateError: boolean('hasStartDateError', false),
      hasStartTimeError: boolean('hasStartTimeError', false),
      hasEndDateError: boolean('hasEndDateError', false),
      hasEndTimeError: boolean('hasEndTimeError', false),
    };

    return <DateTimePicker {...props} />;
  });

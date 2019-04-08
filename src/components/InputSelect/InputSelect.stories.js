import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import InputSelect from '.';

storiesOf('Input.Select', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      options: [{ value: 'AF', label: 'Air France' }, { value: 'U2', label: 'EasyJet' }, { value: '3B', label: 'Job Air' }],
      isSearchable: boolean('Recherchable', true),
      isClearable: boolean('Effaçable', true),
      placeholder: text('Placeholder', 'Ex: Air France'),
    };

    return (
      <InputSelect
        {...props}
      />
    );
  });

import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import InputSelect from '.';
import s from './InputSelect.module.css';

storiesOf('Input.Select', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const values = {
      default: null,
      airFrance: { value: 'AF', label: 'Air France' },
      easyJet: { value: 'U2', label: 'EasyJet' },
      jobAir: { value: '3B', label: 'Job Air' },
    };
    const props = {
      options: [
        { value: 'AF', label: 'Air France' },
        { value: 'U2', label: 'EasyJet' },
        { value: '3B', label: 'Job Air' },
      ],
      isSearchable: boolean('Recherchable', true),
      isClearable: boolean('Effaçable', true),
      placeholder: text('Placeholder', 'Ex: Air France'),
      value: select('Value', values, values.default),
      classname: s.defaultClassName,
      onChange: action('Action onChange'),
    };

    return <InputSelect {...props} />;
  });

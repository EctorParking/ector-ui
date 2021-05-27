import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import {
  withKnobs,
  select,
  object,
  boolean,
} from '@storybook/addon-knobs/react';
import frFlag from '../../assets/images/flags/fr.svg';
import gbFlag from '../../assets/images/flags/gb.svg';
import esFlag from '../../assets/images/flags/es.svg';
import deFlag from '../../assets/images/flags/de.svg';
import s from '../PhoneInput/PhoneInput.module.css';

import Select from '.';

const renderSelectOption = option => (
  <option key={option.value} value={option.value}>
    {option.label}
  </option>
);

storiesOf('Select', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(withKnobs)
  .addDecorator(centered)

  .add('basic', () => {
    const props = {
      options: object('Options', ['France', 'Great Britain']),
      value: select('Value', ['France', 'Great Britain']),
      disabled: boolean('Disabled', false),
    };

    return <Select {...props} onChange={action('change')} />;
  })

  .add('With custom child', () => {
    const countries = [
      { value: 'fr', label: '+33', image: frFlag },
      { value: 'es', label: '+34', image: esFlag },
      { value: 'gb', label: '+44', image: gbFlag },
      { value: 'de', label: '+49', image: deFlag },
    ];

    const country = countries[1];

    return (
      <Select
        options={countries}
        value={country.value}
        renderOption={renderSelectOption}
      >
        <img
          src={country.image}
          className={s.selectImage}
          alt={country.label}
        />
        <span>{country.label}</span>
      </Select>
    );
  });

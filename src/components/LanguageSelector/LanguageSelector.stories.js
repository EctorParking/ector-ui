import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import LanguageSelector from '.';

storiesOf('Input.LanguageSelector', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      label: text('Label', 'Sélecteur de langue'),
      value: select(
        'Value',
        {
          french: 'fr',
          english: 'en',
        },
        'fr'
      ),
      placeholder: text('Placeholder', 'Sélectionner votre langue'),
      languages: [
        {
          name: 'Français',
          locale: 'fr',
          image: 'https://cdn.ectorparking.com/flags/5f0f1a1c8d246.png',
        },
        {
          name: 'English',
          locale: 'en',
          image: 'https://cdn.ectorparking.com/flags/5f0f1a2735c4f.png',
        },
      ],
      onChange: action('Action onChange'),
    };

    return <LanguageSelector {...props} />;
  });

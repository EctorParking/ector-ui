import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import TextIcon from '.';

storiesOf('TextIcon', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      variant: select('Variant', {
        none: 'none',
        white: 'white',
        grey: 'grey',
        melrose: 'melrose',
        yellow: 'yellow',
        blue: 'blue',
      }, 'yellow'),
      imageUrl: text('Label', 'https://cdn.ectorparking.com/images/5ca291a60c49b.svg'),
    };

    return <TextIcon {...props}>Connexion</TextIcon>;
  });

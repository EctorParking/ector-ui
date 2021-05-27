import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Alert from '.';

const defaultText =
  'Merci de votre confiance ! Un email de confirmation vous a été envoyé, vérifiez vos courriers indésirables si vous ne le trouvez pas.';

storiesOf('Alert', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      type: select('Type', ['success', 'error', 'warning'], 'success'),
      title: text('Title', 'Félicitations !'),
      children: text('Content', defaultText),
    };

    return <Alert {...props} />;
  });

import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import LoginForm from './';
import { DefaultTexts } from './LoginFormTextsType';

storiesOf('LoginForm', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      texts: object('Textes', DefaultTexts),
      values: object('Form values', {
        email: 'jeandupont@gmail.com',
        password: 'azerty',
      }),
      errors: object('Form errors', {
        email: '',
        password: '',
      }),
    };

    return (
      <LoginForm
        {...props}
        onChangeEmail={action('changeEmail')}
        onChangePassword={action('onChangePassword')}
        onSubmit={action('connect')}
      />
    );
  });
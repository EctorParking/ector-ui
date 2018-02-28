import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import button from './button';

storiesOf('Button', module)
  .add('with text', () => (
    <button>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button>😀 😎 👍 💯</button>
  ));

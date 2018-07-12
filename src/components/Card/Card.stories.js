import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import Card from './';


storiesOf('Card', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)

  .add('normal', () => (
    <Card>
            Normal
    </Card>
  ))
  .add('selected', () => (
    <Card isSelected>
            Normal
    </Card>
  ))

  .add('with footer', () => (
    <Card FooterChildren="The Footer Node">
            With footer
    </Card>
  ))

  .add('clickable', () => (
    <Card onClick={action('clicked')}>
            Clickable
    </Card>
  ))

  .add('clickable with footer', () => (
    <Card
      onClick={action('clicked')}
      FooterChildren="The Footer Node"
    >
            Clickable
    </Card>
  ));

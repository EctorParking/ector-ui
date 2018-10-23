import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Card from './';


storiesOf('RewardCard', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      isSelected: boolean('Selected', false),
      FooterChildren: text('The Footer Node'),
      onClick: action('clicked'),
    };

    return (
      <Card {...props} headerImage="../../images/poolRewardLarge.png">
                Content
      </Card>
    );
  })
  .add('with label', () => {
    const props = {
      isSelected: boolean('Selected', false),
    };

    return (
      <Card {...props} headerImage="../../images/flyingBlueRewardLarge.png">
                Content
      </Card>
    );
  });

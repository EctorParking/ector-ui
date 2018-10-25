import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import RewardCard from './';
import s from './RewardCard.css';

const rewardText = 'de cagnotte fidélité grâce à votre statut platinum';
const tooltip = 'Ceci est un tootip';
const rewardValue = '+1,95€';
const footerButtonText = 'Choisir';
const options = [
  '../../images/poolRewardLarge.png',
  '../../images/flyingBlueRewardLarge.png',
];
const selectedIcon = '\u2713';

storiesOf('RewardCard', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      isSelected: boolean('Selected', false),
      headerImage: select('Header image', options, options[0], ''),
      rewardText: text('Text', rewardText),
      rewardTooltip: text('Tooltip', tooltip),
      rewardValue: text('Reward value', rewardValue),
      footerButtonText: text('Button text', footerButtonText),
      footerButtonClassName: s.footerButton,
      footerOnClick: () => {},
      selectedIcon: text('Select icon', selectedIcon),
    };

    return (<RewardCard {...props} />);
  });

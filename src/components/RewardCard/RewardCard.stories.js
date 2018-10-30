import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import RewardCard from './';
import s from './RewardCard.css';
import poolRewardLarge from '../../images/poolRewardLarge.png';
import poolRewardSmall from '../../images/poolRewardSmall.png';
import fbRewardLarge from '../../images/flyingBlueRewardLarge.png';
import fbRewardSmall from '../../images/flyingBlueRewardSmall.png';

const options = [
  poolRewardLarge,
  poolRewardSmall,
  fbRewardLarge,
  fbRewardSmall,
];
const selectedIcon = '\u2713';
const rewardValue = '+4.60€';

storiesOf('RewardCard', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      texts: object('Texts', {
        rewardText: 'de cagnotte fidélité grâce à votre statut platinum',
        footerButtonText: 'Choisir',
        buttonTextLogin: 'Connexion',
        loginText: 'Pour profiter de cette récompense, la connexion est requise',
        rewardTooltip: 'Ceci est un tooltip',
      }),
      isSelected: boolean('Selected', true),
      isConnected: boolean('Connected', false),
      headerImage: select('Header image', options, options[0], ''),
      footerButtonClassName: s.footerButton,
      footerOnClick: action('Footer click'),
      selectedIcon: text('Select icon', selectedIcon),
      rewardValue: text('Reward value', rewardValue),
      hasExternalCard: boolean('External card', false),
    };

    return (<RewardCard {...props} />);
  });

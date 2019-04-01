import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import {
  withKnobs, text, select, boolean, object,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import RewardCard from '.';
import s from './RewardCard.module.css';
import poolRewardLarge from '../../assets/images/poolRewardLarge.png';
import poolRewardSmall from '../../assets/images/poolRewardSmall.png';
import fbRewardLarge from '../../assets/images/flyingBlueRewardLarge.png';
import fbRewardSmall from '../../assets/images/flyingBlueRewardSmall.png';

const options = [
  poolRewardLarge,
  poolRewardSmall,
  fbRewardLarge,
  fbRewardSmall,
];
const rewardValue = '+4.60€';

storiesOf('RewardCard', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
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
        updateExternalCard: 'Modifier',
      }),
      isSelected: boolean('Selected', true),
      isConnected: boolean('Connected', false),
      headerImage: select('Header image', options, options[0], ''),
      mobileHeaderImage: select('Mobile header image', options, options[1], ''),
      footerButtonClassName: s.footerButton,
      footerOnClick: action('Footer click'),
      selectedIcon: text('Select icon', 'check'),
      rewardValue: text('Reward value', rewardValue),
      hasExternalCard: boolean('External card', false),
      isExternalCardUpdatable: boolean('External card updatable', false),
      fetching: boolean('Fetching', false),
      onClickEditExternalCard: action('Edit external card'),
      editExternalCardClassName: '',
    };

    return (<RewardCard {...props} />);
  });

import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import RewardCard from '.';
import s from './RewardCard.module.css';
import cashback from '../../assets/images/cashback.png';
import flyingBlue from '../../assets/images/flyingBlue.png';
import flyingBlueSmall from '../../assets/images/flyingBlueSmall.png';

const options = [cashback, flyingBlue, flyingBlueSmall];
const rewardValue = '+4.60€';

storiesOf('RewardCard', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      name: text('Name', 'cashback'),
      texts: object('Texts', {
        rewardText: 'de cagnotte fidélité grâce à votre statut platinum',
        rewardTextMobile: 'de cagnotte fidélité',
        footerButtonText: 'Choisir',
        buttonTextLogin: 'Connexion',
        loginText:
          'Pour profiter de cette récompense, la connexion est requise',
        rewardTooltip: 'Ceci est un tooltip',
        updateExternalCard: 'Modifier',
      }),
      isSelected: boolean('Selected', true),
      isConnected: boolean('Connected', false),
      onRadioButtonChange: action('Change'),
      image: select('Image', options, options[1], ''),
      imageMobile: select('Image mobile', options, options[2], ''),
      footerButtonClassName: s.footerButton,
      selectedIcon: text('Select icon', 'check'),
      rewardValue: text('Reward value', rewardValue),
      hasExternalCard: boolean('External card', false),
      isExternalCardUpdatable: boolean('External card updatable', false),
      fetching: boolean('Fetching', false),
      onClickEditExternalCard: action('Edit external card'),
      editExternalCardClassName: '',
      children: (
        <div>
          <div>Bonjour, je suis un champ</div>
          <div>Avec un retour à la ligne</div>
        </div>
      ),
    };

    return <RewardCard {...props} />;
  });

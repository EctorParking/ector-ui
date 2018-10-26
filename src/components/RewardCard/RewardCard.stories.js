import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import RewardCard from './';
import s from './RewardCard.css';

const rewardText = 'de cagnotte fidélité grâce à votre statut platinum';
const tooltip = 'Ceci est un tootip';
const rewardValue = '+1,95€';
const footerButtonText = 'Choisir';
const footerButtonTextLogin = 'Connexion';
const options = [
  '../../images/poolRewardLarge.png',
  '../../images/flyingBlueRewardLarge.png',
  '../../images/flyingBlueRewardSmall.png',
  '../../images/poolRewardSmall.png',
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
      isSelected: boolean('Selected', true),
      isConnected: boolean('Connected', false),
      headerImage: select('Header image', options, options[0], ''),
      rewardText: text('Text', rewardText),
      rewardTooltip: text('Tooltip', tooltip),
      rewardValue: text('Reward value', rewardValue),
      footerButtonText: text('Button text', footerButtonText),
      footerButtonTextLogin: text('Button text', footerButtonTextLogin),
      footerButtonClassName: s.footerButton,
      footerOnClick: action('Footer click'),
      selectedIcon: text('Select icon', selectedIcon),
      loginFormValues: object('Form values', {
        email: 'jeandupont@gmail.com',
        password: 'azerty',
      }),
      loginFormErrors: object('Form errors', {
        email: '',
        password: '',
      }),
      loginOnChangePassword: action('On change password'),
      loginOnChangeEmail: action('On change email'),
      loginOnSubmit: action('On submit'),
    };

    return (<RewardCard {...props} />);
  });

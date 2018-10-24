import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';

import RewardCard from './';

const rewardText = 'de cagnotte fidélité grâce à votre statut platinum';

storiesOf('RewardCard', module)

  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => (
    <RewardCard
      headerImage="../../images/poolRewardLarge.png"
      rewardText={rewardText}
      rewardTooltip="Ceci est un tootip"
      rewardValue="+1,95€"
      footerButtonText="Choisir"
      footerOnClick={() => {}}
    >
                Content
    </RewardCard>
  ))
  .add('with label', () => (
    <RewardCard
      headerImage="../../images/flyingBlueRewardLarge.png"
      rewardText={rewardText}
      rewardTooltip="Ceci est un tootip"
      rewardValue="+60 Miles"
      footerButtonText="Choisir"
      footerOnClick={() => {}}
    />
  ));

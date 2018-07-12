import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import TitleStep from './';

import s from './TitleStep.css';


storiesOf('Title.Step', module)

  .addDecorator(backgrounds([
    { name: 'header', value: '#163457', default: true },
  ]))
  .addDecorator(centered)

  .add('full presentation', () => (
    <div className={s.steps}>
      <TitleStep
        Active={false}
        Done
        onClick={action('clicked')}
      >
                Options
      </TitleStep>

      <TitleStep
        Active
        Done={false}
        onClick={action('clicked')}
      >
                Informations
      </TitleStep>

      <TitleStep
        Active={false}
        Done={false}
        onClick={action('clicked')}
      >
                Paiment
      </TitleStep>
    </div>
  ))

  .add('done', () => (
    <TitleStep
      Active={false}
      Done
      onClick={action('clicked')}
    >
            Options
    </TitleStep>
  ))

  .add('active', () => (
    <TitleStep
      Active
      Done={false}
      onClick={action('clicked')}
    >
            Infos Voyageurs
    </TitleStep>
  ))

  .add('normal', () => (
    <TitleStep
      Active={false}
      Done={false}
      onClick={action('clicked')}
    >
      Paiement
    </TitleStep>
  ))

  .add('without children', () => (
    <TitleStep
      Active={false}
      Done={false}
      onClick={action('clicked')}
    />
  ));

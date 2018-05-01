import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TitleButton from './';

storiesOf('TitleButton', module)

    .add('done', () => (
        <TitleButton
            Active={false}
            ButtonNumber="1"
            Done
            onClick={action('clicked')}
        >
            Options
        </TitleButton>
    ))

    .add('active', () => (
        <TitleButton
            Active
            ButtonNumber="2"
            Done={false}
            onClick={action('clicked')}
        >
            Infos Voyageurs
        </TitleButton>
    ))

    .add('normal', () => (
        <TitleButton
            Active
            ButtonNumber="3"
            Done={false}
            onClick={action('clicked')}
        >
            Paiement
        </TitleButton>
    ))

    .add('without children', () => (
        <TitleButton
            Active
            ButtonNumber="3"
            Done={false}
            onClick={action('clicked')}
        />
    ));

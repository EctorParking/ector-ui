import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TitleTab from './';

storiesOf('TitleTab', module)

    .add('done', () => (
        <TitleTab
            Active={false}
            ButtonNumber={1}
            Done
            onClick={action('clicked')}
        >
            Options
        </TitleTab>
    ))

    .add('active', () => (
        <TitleTab
            Active
            ButtonNumber={2}
            Done={false}
            onClick={action('clicked')}
        >
            Infos Voyageurs
        </TitleTab>
    ))

    .add('normal', () => (
        <TitleTab
            Active={false}
            ButtonNumber={3}
            Done={false}
            onClick={action('clicked')}
        >
            Paiement
        </TitleTab>
    ))

    .add('without children', () => (
        <TitleTab
            Active
            ButtonNumber={3}
            Done={false}
            onClick={action('clicked')}
        />
    ));

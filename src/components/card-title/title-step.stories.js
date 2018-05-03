import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import CardTitle from './';


storiesOf('Card.Title', module)

    .addDecorator(backgrounds([
        { name: 'header', value: 'white', default: true },
    ]))
    .addDecorator(centered)

    .add('basic', () => (
        <CardTitle>
            Numéro de Vol / Train
        </CardTitle>
    ));

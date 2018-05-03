import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import InputLabel from './';


storiesOf('Input.Label', module)

    .addDecorator(backgrounds([
        { name: 'header', value: 'white', default: true },
    ]))
    .addDecorator(centered)

    .add('normal', () => (
        <InputLabel>
            Aller
        </InputLabel>
    ))

    .add('important', () => (
        <InputLabel isImportant>
            Retour*
        </InputLabel>
    ))

    .add('with input id and placeholder', () => (
        <InputLabel
            inputId="StartInput"
            inputPlaceHolder="AB 000"
        >
            Aller
        </InputLabel>
    ));


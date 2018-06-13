import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import ColorPicker from './';

const colorsList = [
    { label: 'black', hexadecimalCode: '#000000' },
    { label: 'grey', hexadecimalCode: '#818181' },
    { label: 'white', hexadecimalCode: '#ffffff' },
    { label: 'light blue', hexadecimalCode: '#c6d5e8' },
    { label: 'blue', hexadecimalCode: '#4a5f7f' },
    { label: 'green', hexadecimalCode: '#9ac18f' },
    { label: 'yellow', hexadecimalCode: '#e0c580' },
    { label: 'red', hexadecimalCode: '#a96854' },
    { label: 'brown', hexadecimalCode: '#5d4e47' },
    { label: 'transparent', hexadecimalCode: 'transparent' },
];

storiesOf('ColorPicker', module)

    .addDecorator(backgrounds([
        { name: 'header', value: 'white', default: true },
    ]))
    .addDecorator(centered)

    .add('normal', () => (
        <ColorPicker
            colorsList={colorsList}
            onSelect={action('chosen')}
        />
    ));

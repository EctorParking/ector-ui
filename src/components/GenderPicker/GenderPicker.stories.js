import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import GenderPicker from './';

const genders = [
    { value: 'male', label: 'Mr' },
    { value: 'female', label: 'Mme' },
];

storiesOf('GenderPicker', module)

    .addDecorator(backgrounds([
        { name: 'header', value: 'white', default: true },
    ]))
    .addDecorator(centered)

    .add('normal', () => (
        <GenderPicker genders={genders} />
    ));

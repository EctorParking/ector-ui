import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import ActionLink from './';

const onClick = () => {
    console.log('Clicked');
};

storiesOf('Card', module)

    .addDecorator(backgrounds([
        { name: 'header', value: 'white', default: true },
    ]))
    .addDecorator(centered)

    .add('without icon', () => (
        <ActionLink
            onClick={onClick}
            label="Action Link"
        />
    ))

    .add('with icon', () => (
        <ActionLink
            onClick={onClick}
            label="Action Link"
            icon="faq"
        />
    ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import BookingSteps from './';

const texts = {
    pickup: 'Prise en charge',
    return: 'Restitution',
};

storiesOf('BookingSteps', module)

    .addDecorator(backgrounds([
        { name: 'header', value: 'white', default: true },
    ]))
    .addDecorator(centered)

    .add('normal', () => (
        <BookingSteps
            fromSpot="Paris Gare de l’Est"
            toSpot="Paris Gare de l’Est"
            startAt="Ven. 20 avril à 15:00"
            endAt="Dim. 22 avril à 15:00"
            texts={texts}
        />
    ));

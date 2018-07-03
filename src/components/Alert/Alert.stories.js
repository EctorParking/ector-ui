import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import Alert from './';

storiesOf('Alert', module)

    .addDecorator(backgrounds([
        { name: 'header', value: 'white', default: true },
    ]))
    .addDecorator(centered)

    .add('success', () => (
        <Alert
            type="success"
            title="Félicitations !"
        >
            Merci de votre confiance !
            Un email de confirmation vous a été envoyé, vérifiez vos courriers
            indésirables si vous ne le trouvez pas.
        </Alert>
    ))

    .add('error', () => (
        <Alert
            type="error"
            title="Uh oh!"
        >
            Something went wrong!
        </Alert>
    ));

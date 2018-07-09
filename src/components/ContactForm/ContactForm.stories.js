import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import ContactForm from './';

const texts = {
    newDriver: 'Ajouter un nouveau conducteur',
    addDriver: 'Ajouter ce conducteur',
    civility: 'Civilité',
    firstName: 'Prénom',
    lastName: 'Nom',
    firstNamePlaceholder: 'Alain',
    lastNamePlaceholder: 'Prost',
    email: 'Email',
    phone: 'Téléphone',
    postCode: 'Code postal',
    notMandatory: 'facultatif',
    emailPlaceholder: 'alain.prost@gmail.com',
    postCodePlaceholder: '44 100',
};

storiesOf('ContactForm', module)

    .addDecorator(backgrounds([
        { name: 'header', value: 'white', default: true },
    ]))
    .addDecorator(centered)

    .add('normal', () => (
        <ContactForm texts={texts} />
    ));

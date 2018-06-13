import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import ContactCard from './';

const texts = {
    modify: 'Changer',
    save: 'Enregistrer',
    confirmDeletionTitle: 'Confirmation',
    confirmDeletionSentence: 'Êtes-vous sûr(e) de vouloir supprimer ce contact ?',
    cancel: 'Annuler',
    confirm: 'Confirmer',
};

storiesOf('CarCard', module)

    .addDecorator(backgrounds([
        { name: 'header', value: 'white', default: true },
    ]))
    .addDecorator(centered)

    .add('basic', () => (
        <ContactCard
            firstName="Jean"
            lastName="Dupont"
            email="jeandupont@gmail.com"
            phoneNumber="+33 6 12 15 32 54"
            gender="male"
            texts={texts}
        />
    ))

    .add('selected', () => (
        <ContactCard
            firstName="Jean"
            lastName="Dupont"
            email="jeandupont@gmail.com"
            phoneNumber="+33 6 12 15 32 54"
            gender="male"
            texts={texts}
            selected
        />
    ))

    .add('pendingModification', () => (
        <ContactCard
            firstName="Jean"
            lastName="Dupont"
            email="jeandupont@gmail.com"
            phoneNumber="+33 6 12 15 32 54"
            gender="male"
            modifiable
            pendingModification
            texts={texts}
        />
    ))

    .add('deletable', () => (
        <ContactCard
            firstName="Jean"
            lastName="Dupont"
            email="jeandupont@gmail.com"
            phoneNumber="+33 6 12 15 32 54"
            gender="male"
            deletable
            modifiable
            pendingModification
            texts={texts}
        />
    ))

    .add('pendingDeletion', () => (
        <ContactCard
            firstName="Jean"
            lastName="Dupont"
            email="jeandupont@gmail.com"
            phoneNumber="+33 6 12 15 32 54"
            gender="male"
            modifiable
            pendingDeletion
            texts={texts}
        />
    ));

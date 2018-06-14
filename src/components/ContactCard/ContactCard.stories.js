import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import ContactCard from './';

const texts = {
    modify: 'Changer',
    delete: 'Supprimer',
    save: 'Enregistrer',
    confirmDeletionTitle: 'Confirmation',
    confirmDeletionSentence: 'Êtes-vous sûr(e) de vouloir supprimer ce contact ?',
    cancel: 'Annuler',
    confirm: 'Confirmer',
};

const contact = {
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jeandupont@gmail.com',
    phoneNumber: '+33 6 12 15 32 54',
    gender: 'male',
};

storiesOf('CarCard', module)

    .addDecorator(backgrounds([
        { name: 'header', value: 'white', default: true },
    ]))
    .addDecorator(centered)

    .add('basic', () => (
        <ContactCard
            contact={contact}
            texts={texts}
        />
    ))

    .add('selected', () => (
        <ContactCard
            contact={contact}
            texts={texts}
            selected
        />
    ))

    .add('pendingModification', () => (
        <ContactCard
            contact={contact}
            modifiable
            pendingModification
            texts={texts}
        />
    ))

    .add('deletable', () => (
        <ContactCard
            contact={contact}
            deletable
            modifiable
            pendingModification
            texts={texts}
        />
    ))

    .add('pendingDeletion', () => (
        <ContactCard
            contact={contact}
            modifiable
            pendingDeletion
            texts={texts}
        />
    ));

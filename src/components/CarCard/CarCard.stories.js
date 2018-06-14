import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

import CarCard from './';

const texts = {
    modify: 'Changer',
    save: 'Enregistrer',
    confirmDeletionTitle: 'Confirmation',
    confirmDeletionSentence: 'Êtes-vous sûr(e) de vouloir supprimer ce véhicule ?',
    cancel: 'Annuler',
    confirm: 'Confirmer',
};

const car = {
    name: 'Audi A3',
    numberPlate: 'TB-894-LI',
};

storiesOf('CarCard', module)

    .addDecorator(backgrounds([
        { name: 'header', value: 'white', default: true },
    ]))
    .addDecorator(centered)

    .add('not selected', () => (
        <CarCard
            car={car}
            texts={texts}
        />
    ))

    .add('modifiable selected', () => (
        <CarCard
            car={car}
            texts={texts}
            modifiable
            selected
        />
    ))

    .add('modifiable selected pendingModification', () => (
        <CarCard
            car={car}
            texts={texts}
            modifiable
            selected
            pendingModification
        />
    ))

    .add('modifiable deletable selected pendingModification', () => (
        <CarCard
            car={car}
            texts={texts}
            modifiable
            deletable
            selected
            pendingModification
        />
    ))

    .add('pendingDeletion', () => (
        <CarCard
            car={car}
            texts={texts}
            selected
            pendingDeletion
        />
    ));

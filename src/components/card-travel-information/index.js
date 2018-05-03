import React from 'react';

import Card from '../card';
import CardTitle from '../card-title';
import InputLabel from '../input-label';
import InputCheckbox from '../input-checkbox';

import s from './card-travel-information.css';

const CardTravelInformation = () => (
    <Card>
        <CardTitle>
            Numéro de Vol / Train
        </CardTitle>

        <div className={s.inputs_row}>
            <InputLabel placeHolder="AB 000">
                Aller
            </InputLabel>
            <InputLabel
                isImportant
                placeHolder="AB 000"
            >
                Retour*
            </InputLabel>
        </div>

        <InputCheckbox>
            Voyage professionnel
        </InputCheckbox>
    </Card>
);


export default CardTravelInformation;

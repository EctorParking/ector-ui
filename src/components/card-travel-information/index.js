import React from 'react';


import s from './card-travel-information.css';

import InputLabel from '../input-label';
import CardTitle from '../card-title';


const CardTravelInformation = () => (
    <div className={s.card_travel_information}>
        <CardTitle>
            Not finished : create Card component to do it clean
        </CardTitle>

        <div className={s.inputs_row}>
            <InputLabel>
                Aller
            </InputLabel>
            <InputLabel isImportant>
                Retour*
            </InputLabel>
        </div>
    </div>
);


export default CardTravelInformation;

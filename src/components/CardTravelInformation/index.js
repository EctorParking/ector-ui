import React from 'react';

import Card from '../Card';
import CardTitle from '../CardTitle';
import InputLabel from '../InputLabel';
import InputCheckbox from '../InputCheckbox';

import s from './CardTravelInformation.css';

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

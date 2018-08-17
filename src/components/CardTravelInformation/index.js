import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle, InputLabel } from '../';

import s from './CardTravelInformation.css';

const CardTravelInformation = ({
  texts,
  className,
  onOutwardChange,
  onReturnChange,
  returnValue,
  outwardValue,
  inputClassName,
}) => (
  <div className={className}>
    <Card>
      <CardTitle className={s.title}>
        {texts.title}
      </CardTitle>

      <div className={s.inputs_row}>
        <InputLabel
          placeholder={texts.outwardPlaceholder}
          label={texts.outwardLabel}
          onChange={onOutwardChange}
          value={outwardValue}
          className={s.outwardInputLabel}
          inputClassName={[s.input, inputClassName].join(' ')}
        />
        <InputLabel
          mandatory
          placeholder={texts.returnPlaceholder}
          label={texts.returnLabel}
          onChange={onReturnChange}
          value={returnValue}
          className={s.returnInputLabel}
          inputClassName={[s.input, inputClassName].join(' ')}
        />
      </div>
    </Card>
    <div className={s.mandatorySentence}>{texts.mandatoryFields}</div>
  </div>
);

CardTravelInformation.defaultProps = {
  texts: {
    title: 'Numéro de Vol / Train',
    outwardPlaceholder: 'AB 000',
    outwardLabel: 'Aller',
    returnPlaceholder: 'AB 0000',
    returnLabel: 'Retour',
    businessTravel: 'Voyage professionel',
    mandatoryFields: '* Champs obligatoires',
  },
  onOutwardChange: () => {},
  onReturnChange: () => {},
  className: '',
  outwardValue: '',
  returnValue: '',
  inputClassName: '',
};

CardTravelInformation.propTypes = {
  texts: PropTypes.shape({
    title: PropTypes.string,
    outwardPlaceholder: PropTypes.string,
    outwardLabel: PropTypes.string,
    returnPlaceholder: PropTypes.string,
    returnLabel: PropTypes.string,
    businessTravel: PropTypes.string,
    mandatoryFields: PropTypes.string,
  }),
  className: PropTypes.string,
  onOutwardChange: PropTypes.func,
  onReturnChange: PropTypes.func,
  outwardValue: PropTypes.string,
  returnValue: PropTypes.string,
  inputClassName: PropTypes.string,
};


export default CardTravelInformation;

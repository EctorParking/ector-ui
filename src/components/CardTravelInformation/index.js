import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle, InputLabel, ActionLink } from '../';

import s from './CardTravelInformation.css';

const CardTravelInformation = ({
  texts,
  className,
  onOutwardChange,
  onReturnChange,
  returnValue,
  outwardValue,
  inputClassName,
  onClickUnknownFlightNumber,
}) => (
  <div className={className}>
    <Card>
      <CardTitle className={s.title}>
        {texts.title}
      </CardTitle>

      <div className={s.inputsRow}>
        <InputLabel
          placeholder={texts.outwardPlaceholder}
          label={texts.outwardLabel}
          onChange={onOutwardChange}
          value={outwardValue}
          className={s.outwardInputLabel}
          inputClassName={inputClassName}
        />
        <div>
          <InputLabel
            mandatory
            placeholder={texts.returnPlaceholder}
            label={texts.returnLabel}
            onChange={onReturnChange}
            value={returnValue}
            className={s.returnInputLabel}
            inputClassName={inputClassName}
          />
          <ActionLink
            label={texts.unknownFlightNumber}
            className={s.unknownFlightNumber}
            onClick={onClickUnknownFlightNumber}
          />
        </div>
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
    unknownFlightNumber: 'Je ne le connais pas',
  },
  onOutwardChange: () => {},
  onReturnChange: () => {},
  onClickUnknownFlightNumber: () => {},
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
    unknownFlightNumber: PropTypes.string,
  }),
  className: PropTypes.string,
  onOutwardChange: PropTypes.func,
  onReturnChange: PropTypes.func,
  outwardValue: PropTypes.string,
  returnValue: PropTypes.string,
  inputClassName: PropTypes.string,
  onClickUnknownFlightNumber: PropTypes.func,
};


export default CardTravelInformation;

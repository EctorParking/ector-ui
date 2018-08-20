import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle, InputLabel } from '../';
import CardTravelInformationTextsType, { defaultTexts } from './CardTravelInformationTextsType';

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
          inputClassName={inputClassName}
        />
        <InputLabel
          mandatory
          placeholder={texts.returnPlaceholder}
          label={texts.returnLabel}
          onChange={onReturnChange}
          value={returnValue}
          className={s.returnInputLabel}
          inputClassName={inputClassName}
        />
      </div>
    </Card>
    <div className={s.mandatorySentence}>{texts.mandatoryFields}</div>
  </div>
);

CardTravelInformation.defaultProps = {
  texts: defaultTexts,
  onOutwardChange: () => {},
  onReturnChange: () => {},
  className: '',
  outwardValue: '',
  returnValue: '',
  inputClassName: '',
};

CardTravelInformation.propTypes = {
  texts: CardTravelInformationTextsType,
  className: PropTypes.string,
  onOutwardChange: PropTypes.func,
  onReturnChange: PropTypes.func,
  outwardValue: PropTypes.string,
  returnValue: PropTypes.string,
  inputClassName: PropTypes.string,
};


export default CardTravelInformation;

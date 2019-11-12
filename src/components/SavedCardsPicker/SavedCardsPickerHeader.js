import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from '../RadioButton';
import s from './SavedCardsPickerHeader.module.css';
import SavedCardsPickerTextTypes from './SavedCardsPickerTextTypes';

const CardTypes = {
  total: 'total',
  stripe: 'stripe',
};

const getHeaderTitle = (value, texts) => {
  switch (value) {
  case CardTypes.stripe: return texts.titleStripe;
  case CardTypes.total: return texts.titleTotal;

  default: return null;
  }
};

const SavedCardsPickerHeader = ({
  isSelected,
  onRadioButtonChange,
  cardType,
  texts,
}) => (
  <div className={s.header} onClick={() => onRadioButtonChange(cardType)}>
    <RadioButton
      label=" "
      checked={isSelected}
      onSelect={onRadioButtonChange}
      value={cardType}
      name=""
    />
    <span className={s.text}>
      <strong>{getHeaderTitle(cardType, texts)}</strong>
    </span>
    {cardType === CardTypes.stripe && (
      <div className={s.availableCards}>
        <img
          src={texts.iconVisa}
          alt="Visa"
          className={[s.cardIcon, s.cardIconBigger].join(' ')}
        />
        <img
          src={texts.iconMastercard}
          alt="MasterCard"
          className={[s.cardIcon, s.cardIconSmaller].join(' ')}
        />
        <img
          src={texts.iconAmerican}
          alt="American Express"
          className={[s.cardIcon, s.cardIconSmaller].join(' ')}
        />
        <img
          src={texts.iconBusinessEdenRed}
          alt="Business Edenred"
          className={[s.cardIcon, s.cardIconBusinessEdenred].join(' ')}
        />
      </div>
    )}
    {cardType === CardTypes.total && (
      <div className={s.availableCards}>
        <img
          src={texts.iconTotal}
          alt="Total"
          className={[s.cardIcon, s.cardIconBigger].join(' ')}
        />
      </div>
    )}
  </div>
);

SavedCardsPickerHeader.propTypes = {
  cardType: PropTypes.oneOf(Object.values(CardTypes)).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onRadioButtonChange: PropTypes.func.isRequired,
  texts: SavedCardsPickerTextTypes.isRequired,
};

export default SavedCardsPickerHeader;

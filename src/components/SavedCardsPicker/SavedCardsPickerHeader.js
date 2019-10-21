import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from '../RadioButton';
import s from './SavedCardsPickerHeader.module.css';
import SavedCardsPickerTextTypes from './SavedCardsPickerTextTypes';

const SavedCardsPickerHeader = ({
  isSelected,
  onRadioButtonChange,
  value,
  texts,
}) => (
  <div className={s.header}>
    <RadioButton
      label=" "
      checked={isSelected}
      onSelect={onRadioButtonChange}
      value={value}
      name=""
    />
    <span className={s.text}>
      <strong>{value === 'stripe' ? texts.titleStripe : texts.titleTotal}</strong>
    </span>
    {value === 'stripe' && (
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
    {value === 'total' && (
      <div className={s.availableCards}>
        <img
          src={texts.iconVisa}
          alt="Visa"
          className={[s.cardIcon, s.cardIconBigger].join(' ')}
        />
      </div>
    )}
  </div>
);

SavedCardsPickerHeader.propTypes = {
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onRadioButtonChange: PropTypes.func.isRequired,
  texts: SavedCardsPickerTextTypes.isRequired,
};

export default SavedCardsPickerHeader;

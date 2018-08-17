import React from 'react';
import PropTypes from 'prop-types';
import LinkUnderlined from '../LinkUnderlined';
import TextsType, { DefaultTexts } from './CarCardTextsType';
import s from './CarCardDeletionAlert.css';

const CarCardDeletionAlert = ({ texts, onDelete }) => (
  <div className={s.deletionAlert}>
    <strong>{texts.confirmDeletionTitle}</strong>
    <p>{texts.confirmDeletionSentence}</p>
    <div className={s.deletionButtons}>
      <LinkUnderlined>
        <strong>{texts.cancel}</strong>
      </LinkUnderlined>
      <LinkUnderlined onClick={onDelete}>
        <strong>{texts.confirm}</strong>
      </LinkUnderlined>
    </div>
  </div>
);

CarCardDeletionAlert.defaultProps = {
  texts: DefaultTexts,
};

CarCardDeletionAlert.propTypes = {
  texts: TextsType,
  onDelete: PropTypes.func.isRequired,
};

export default CarCardDeletionAlert;

import React from 'react';
import PropTypes from 'prop-types';
import LinkUnderlined from '../LinkUnderlined';
import TextsType, { DefaultTexts } from './CarCardTextsType';
import s from './CarCardDeletionAlert.css';

const CarCardDeletionAlert = ({
  texts, onDelete, onCancel, id,
}) => (
  <div className={s.deletionAlert} id={id}>
    <strong>{texts.confirmDeletionTitle}</strong>
    <p>{texts.confirmDeletionSentence}</p>
    <div className={s.deletionButtons}>
      <LinkUnderlined onClick={onCancel} id={`${id}CancelLink`}>
        <strong>{texts.cancel}</strong>
      </LinkUnderlined>
      <LinkUnderlined onClick={onDelete} id={`${id}ConfirmLink`}>
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
  onCancel: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default CarCardDeletionAlert;

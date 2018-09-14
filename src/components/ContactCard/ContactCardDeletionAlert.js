import React from 'react';
import PropTypes from 'prop-types';
import LinkUnderlined from '../LinkUnderlined';
import TextsType, { DefaultTexts } from './ContactCardTextsType';
import s from './ContactCardDeletionAlert.css';

const ContactCardDeletionAlert = ({
  texts, onConfirm, onCancel, id,
}) => (
  <div className={s.deletionAlert} id={id}>
    <strong>{texts.confirmDeletionTitle}</strong>
    <p>{texts.confirmDeletionSentence}</p>
    <div className={s.deletionButtons}>
      <LinkUnderlined onClick={onCancel} id={`${id}CancelLink`}>
        <strong>{texts.cancel}</strong>
      </LinkUnderlined>
      <LinkUnderlined onClick={onConfirm} id={`${id}ConfirmLink`}>
        <strong>{texts.confirm}</strong>
      </LinkUnderlined>
    </div>
  </div>
);

ContactCardDeletionAlert.defaultProps = {
  texts: DefaultTexts,
};

ContactCardDeletionAlert.propTypes = {
  texts: TextsType,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactCardDeletionAlert;

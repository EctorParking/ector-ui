import React from 'react';
import PropTypes from 'prop-types';
import LinkUnderlined from '../LinkUnderlined';
import TextsType, { DefaultTexts } from './ContactCardTextsType';
import s from './ContactCardDeletionAlert.css';

const ContactCardDeletionAlert = ({ texts, onDelete, onCancel }) => (
  <div className={s.deletionAlert}>
    <strong>{texts.confirmDeletionTitle}</strong>
    <p>{texts.confirmDeletionSentence}</p>
    <div className={s.deletionButtons}>
      <LinkUnderlined onClick={onCancel}>
        <strong>{texts.cancel}</strong>
      </LinkUnderlined>
      <LinkUnderlined onClick={onDelete}>
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
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ContactCardDeletionAlert;

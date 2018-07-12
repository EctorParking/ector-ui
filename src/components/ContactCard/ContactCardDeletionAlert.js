import React from 'react';
import PropTypes from 'prop-types';
import LinkUnderlined from '../LinkUnderlined';
import ContactCardTextsType from './ContactCardTextsType';
import s from './ContactCardDeletionAlert.css';

const ContactCardDeletionAlert = ({ texts, onDelete }) => (
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

ContactCardDeletionAlert.propTypes = {
  texts: ContactCardTextsType.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactCardDeletionAlert;

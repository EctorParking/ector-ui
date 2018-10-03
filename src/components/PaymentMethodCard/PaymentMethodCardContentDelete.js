import React from 'react';
import PropTypes from 'prop-types';
import PaymentMethodTextsType from './PaymentmethodTextsType';
import s from './PaymentmethodCardContentDelete.css';
import { LinkUnderlined } from '..';

const PaymentmethodCardContentDelete = ({ texts, onConfirmDeletion, onCancelDeletion }) => (
  <div className={s.container}>
    <strong>{texts.confirmDeletionTitle}</strong>
    <p className={s.sentence}>{texts.confirmDeletionSentence}</p>
    <div className={s.buttons}>
      <LinkUnderlined onClick={onCancelDeletion}>
        <strong>{texts.cancel}</strong>
      </LinkUnderlined>
      <LinkUnderlined onClick={onConfirmDeletion}>
        <strong>{texts.confirm}</strong>
      </LinkUnderlined>
    </div>
  </div>
);

PaymentmethodCardContentDelete.propTypes = {
  texts: PaymentMethodTextsType.isRequired,
  onConfirmDeletion: PropTypes.func.isRequired,
  onCancelDeletion: PropTypes.func.isRequired,
};

export default PaymentmethodCardContentDelete;

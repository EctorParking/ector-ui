import React from 'react';
import PropTypes from 'prop-types';
import PaymentMethodTextsType from './PaymentMethodTextsType';
import s from './PaymentmethodCardContentDelete.module.css';
import { LinkUnderlined } from '..';

const PaymentMethodCardContentDelete = ({ texts, onConfirmDeletion, onCancelDeletion }) => (
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

PaymentMethodCardContentDelete.propTypes = {
  texts: PaymentMethodTextsType.isRequired,
  onConfirmDeletion: PropTypes.func.isRequired,
  onCancelDeletion: PropTypes.func.isRequired,
};

export default PaymentMethodCardContentDelete;

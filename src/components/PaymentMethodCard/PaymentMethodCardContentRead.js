import React, { Fragment } from 'react';
import PaymentMethodType from './PaymentMethodType';
import PaymentMethodTextsType from './PaymentmethodTextsType';
import iconVisa from '../../assets/images/visa.svg';
import iconAmerican from '../../assets/images/amercan-express.svg';
import iconCb from '../../assets/images/cb.svg';
import iconMastercard from '../../assets/images/mastercard.svg';
import iconTotal from '../../assets/images/TOTAL_SA_logo.svg';
import s from './PaymentMethodCardContentRead.module.css';

const creditCardBrandIcons = {
  visa: iconVisa,
  american: iconAmerican,
  cb: iconCb,
  mastercard: iconMastercard,
  total: iconTotal,
};

const paymentMethodType = {
  card: 'card',
  total: 'saved-total',
};

const PaymentMethodCardContentRead = ({ paymentMethod, texts }) => (
  <Fragment>
    {
      (paymentMethod.type === paymentMethodType.card
        || paymentMethod.type === paymentMethodType.total) && (
        <img
          className={s.brandIcon}
          src={creditCardBrandIcons[paymentMethod.brand]}
          alt={paymentMethod.brand}
        />
      )
    }
    {
      !paymentMethod.cardName ? (
        <span className={s.contentHalfLine}>
          <br />
        </span>
      ) : (
        <span className={s.content}>
          {paymentMethod.cardName}
        </span>
      )
    }
    <span className={s.content}>
      &#183;&#183;&#183;&#183;&nbsp;&#183;&#183;&#183;&#183;&nbsp;&#183;&#183;&#183;&#183;&nbsp;
      {paymentMethod.last4digits}
    </span>
    <span className={s.content}>
      {texts.expireAt}
&nbsp;:&nbsp;
      {paymentMethod.expireAt}
    </span>
    {
      !paymentMethod.cardName && (
        <span className={s.contentHalfLine}>
          <br />
        </span>
      )
    }
  </Fragment>
);

PaymentMethodCardContentRead.propTypes = {
  paymentMethod: PaymentMethodType.isRequired,
  texts: PaymentMethodTextsType.isRequired,
};

export default PaymentMethodCardContentRead;

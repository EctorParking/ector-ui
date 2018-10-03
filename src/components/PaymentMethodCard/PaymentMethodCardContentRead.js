import React, { Fragment } from 'react';
import PaymentMethodType from './PaymentMethodType';
import PaymentMethodTextsType from './PaymentmethodTextsType';
import iconVisa from '../../images/visa.svg';
import iconAmerican from '../../images/amercan-express.svg';
import iconCb from '../../images/cb.svg';
import iconMastercard from '../../images/mastercard.svg';
import s from './PaymentMethodCardContentRead.css';

const creditCardBrandIcons = {
  visa: iconVisa,
  american: iconAmerican,
  cb: iconCb,
  mastercard: iconMastercard,
};

const PaymentMethodCardContentRead = ({ paymentMethod, texts }) => (
  <Fragment>
    {
      paymentMethod.type === 'card' && (
        <img
          className={s.brandIcon}
          src={creditCardBrandIcons[paymentMethod.brand]}
          alt={paymentMethod.brand}
        />
      )
    }
    <span className={s.content}>
      &#183;&#183;&#183;&#183;&nbsp;&#183;&#183;&#183;&#183;&nbsp;&#183;&#183;&#183;&#183;&nbsp;
      {paymentMethod.last4digits}
    </span>
    <span className={s.content}>{texts.expireAt}&nbsp;:&nbsp;{paymentMethod.expireAt}</span>
  </Fragment>
);

PaymentMethodCardContentRead.propTypes = {
  paymentMethod: PaymentMethodType.isRequired,
  texts: PaymentMethodTextsType.isRequired,
};

export default PaymentMethodCardContentRead;
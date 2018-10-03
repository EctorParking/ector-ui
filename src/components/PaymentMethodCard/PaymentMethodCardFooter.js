import React from 'react';
import PropTypes from 'prop-types';
import s from './PaymentMethodCardFooter.css';
import { LinkUnderlined } from '..';
import PaymentMethodTextsType from './PaymentmethodTextsType';

const PaymentMethodCardFooter = ({
  className, selected, texts, onClick,
}) => (
  <div className={[s.container, className].join(' ')}>
    {
      selected ? (
        <i className={`icon-checkmark ${s.checkIcon}`} />
      ) : (
        <LinkUnderlined onClick={onClick}>
          <strong>{texts.select}</strong>
        </LinkUnderlined>
      )
    }
  </div>
);

PaymentMethodCardFooter.defaultProps = {
  className: '',
};

PaymentMethodCardFooter.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  texts: PaymentMethodTextsType.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PaymentMethodCardFooter;

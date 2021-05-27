import React from 'react';
import PropTypes from 'prop-types';
import s from './PaymentMethodCardFooter.module.css';
import { LinkUnderlined } from '..';
import PaymentMethodTextsType from './PaymentMethodTextsType';

const PaymentMethodCardFooter = ({
  className,
  selected,
  texts,
  onClick,
  testid,
}) => (
  <div className={[s.container, className].join(' ')}>
    {selected ? (
      <i className={`icon-checkmark ${s.checkIcon}`} />
    ) : (
      <LinkUnderlined onClick={onClick} testid={`${testid}Button`}>
        <strong>{texts.select}</strong>
      </LinkUnderlined>
    )}
  </div>
);

PaymentMethodCardFooter.defaultProps = {
  className: undefined,
  testid: '',
};

PaymentMethodCardFooter.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  texts: PaymentMethodTextsType.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string,
};

export default PaymentMethodCardFooter;

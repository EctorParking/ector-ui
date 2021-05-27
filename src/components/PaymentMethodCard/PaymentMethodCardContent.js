import React from 'react';
import PropTypes from 'prop-types';
import PaymentMethodCardContentRead from './PaymentMethodCardContentRead';
import PaymentMethodCardContentDelete from './PaymentMethodCardContentDelete';
import PaymentMethodType from './PaymentMethodType';
import PaymentMethodTextsType from './PaymentMethodTextsType';

const PaymentMethodCardContent = ({ pendingDeletion, ...contentProps }) =>
  pendingDeletion ? (
    <PaymentMethodCardContentDelete {...contentProps} />
  ) : (
    <PaymentMethodCardContentRead {...contentProps} />
  );

PaymentMethodCardContent.propTypes = {
  paymentMethod: PaymentMethodType.isRequired,
  texts: PaymentMethodTextsType.isRequired,
  pendingDeletion: PropTypes.bool.isRequired,
  onConfirmDeletion: PropTypes.func.isRequired,
  onCancelDeletion: PropTypes.func.isRequired,
};

export default PaymentMethodCardContent;

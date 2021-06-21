import React from 'react';
import PropTypes from 'prop-types';
import s from './PaymentMethodCardHeader.module.css';
import PaymentMethodCardTextsType from './PaymentMethodTextsType';

const PaymentMethodCardHeader = ({
  onDelete,
  texts,
  pendingDeletion,
  className,
}) =>
  pendingDeletion ? null : (
    <div className={[s.container, className].join(' ')}>
      <button title={texts.remove} onClick={onDelete}>
        <i className={`icon-bin ${s.icon}`} />
      </button>
    </div>
  );

PaymentMethodCardHeader.defaultProps = {
  className: undefined,
};

PaymentMethodCardHeader.propTypes = {
  onDelete: PropTypes.func.isRequired,
  texts: PaymentMethodCardTextsType.isRequired,
  pendingDeletion: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default PaymentMethodCardHeader;

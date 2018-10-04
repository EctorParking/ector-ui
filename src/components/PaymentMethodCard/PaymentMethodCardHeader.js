import React from 'react';
import PropTypes from 'prop-types';
import s from './PaymentMethodCardHeader.css';
import PaymentMethodCardTextsType from './PaymentmethodTextsType';

const PaymentMethodCardHeader = ({
  onDelete, texts, pendingDeletion, className,
}) => (
  pendingDeletion ? null : (
    <div className={[s.container, className].join(' ')}>
      <button
        className={s.button}
        title={texts.remove}
        onClick={onDelete}
      >
        <i className={`icon-bin ${s.icon}`} />
      </button>
    </div>
  )
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
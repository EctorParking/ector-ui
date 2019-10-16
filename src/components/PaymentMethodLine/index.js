import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import s from './PaymentMethodLine.module.css';
import PaymentMethodType from './PaymentMethodType';

import cbImage from '../../assets/images/cb.svg';

const PaymentMethodLine = ({
  card,
  paymentMethod,
  src,
  alt,
  brandText,
  onClick,
  deleteIconClassName,
  onSelect,
}) => (
  <tr
    key={paymentMethod.id}
    onClick={() => onSelect(paymentMethod.id)}
    className={[s.tableRow, card === paymentMethod.id ? s.clicked : undefined].join(' ')}
  >
    {console.log(`card = ${card}`)}
    {console.log(`id = ${paymentMethod.id}`)}
    <td className={s.checkedButton}>
      {card === paymentMethod.id && (
        <img
          src={cbImage}
          alt="checkedButton"
        />
      )}
    </td>
    <td className={[s.paymentCardCell, s.brand].join(' ')}>
      <img
        src={src}
        alt={alt}
        className={s.cardIconInList}
      />
      {paymentMethod.cardName || brandText}
    </td>
    <td className={s.paymentCardCell}>
      <span className={s.lastFourDigits}>
        <span className={s.hiddenDigits}>
          {'\u2022\u2022\u2022\u2022 '}
        </span>
        {paymentMethod.last4digits}
      </span>
    </td>
    <td className={s.paymentCardCell}>{moment(paymentMethod.expireAt).format('MM/YY')}</td>
    <td className={s.deleteButtonCell}>
      <button
        type="button"
        className={s.deleteButton}
        title="Supprimer"
        onClick={onClick}
      >
        <i className={`icon-ec-close ${deleteIconClassName}`} />
      </button>
    </td>
  </tr>
);

PaymentMethodLine.propTypes = {
  card: PropTypes.string.isRequired,
  paymentMethod: PaymentMethodType.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  brandText: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
  deleteIconClassName: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

PaymentMethodLine.defaultProps = {
  deleteIconClassName: undefined,
};


export default PaymentMethodLine;

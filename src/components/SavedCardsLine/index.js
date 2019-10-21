import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import s from './SavedCardsLine.module.css';
import PaymentMethodType from './PaymentMethodType';

const Index = ({
  card,
  paymentMethod,
  src,
  srcGrey,
  alt,
  brandText,
  onClickDeleteButton,
  deleteIconClassName,
  onSelectLine,
  checkImg,
}) => (
  <tr
    key={paymentMethod.id}
    onClick={() => onSelectLine(paymentMethod.id)}
    className={[s.tableRow, card === paymentMethod.id ? s.clicked : undefined].join(' ')}
  >
    <td className={s.checkedButton}>
      {card === paymentMethod.id && (
        <img
          src={checkImg}
          alt="checkedButton"
          className={s.checkedImg}
        />
      )}
    </td>
    <td className={s.paymentCardCell}>
      <img
        src={card === paymentMethod.id ? src : srcGrey}
        alt={alt}
        className={s.cardIcon}
      />
      <span className={s.cardName}>
        {paymentMethod.cardName || brandText}
      </span>
    </td>
    <td className={s.paymentCardCell}>
      <span className={s.lastFourDigits}>
        <span className={s.hiddenDigits}>
          {'\u2022\u2022\u2022\u2022 '}
        </span>
        {paymentMethod.last4digits}
      </span>
    </td>
    <td className={[s.paymentCardCell, s.expireAt].join(' ')}>{moment(paymentMethod.expireAt).format('MM/YY')}</td>
    <td className={[s.deleteButtonCell, s.paymentCardCell].join(' ')}>
      <button
        type="button"
        className={s.deleteButton}
        onClick={onClickDeleteButton}
      >
        <i className={`icon-ec-close ${deleteIconClassName}`} />
      </button>
    </td>
  </tr>
);

Index.propTypes = {
  card: PropTypes.string.isRequired,
  paymentMethod: PaymentMethodType.isRequired,
  src: PropTypes.string.isRequired,
  srcGrey: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  brandText: PropTypes.string.isRequired,
  onClickDeleteButton: PropTypes.string.isRequired,
  deleteIconClassName: PropTypes.string,
  onSelectLine: PropTypes.func.isRequired,
  checkImg: PropTypes.string.isRequired,
};

Index.defaultProps = {
  deleteIconClassName: undefined,
};


export default Index;

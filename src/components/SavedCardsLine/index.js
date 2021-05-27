import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import s from './SavedCardsLine.module.css';
import PaymentMethodType from './PaymentMethodType';

const SavedCardsLine = ({
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
  <div
    onClick={() => onSelectLine(paymentMethod.id)}
    onKeyDown={() => onSelectLine(paymentMethod.id)}
    role="button"
    className={[
      s.tableRow,
      card === paymentMethod.id ? s.clicked : undefined,
    ].join(' ')}
    tabIndex="0"
  >
    <div className={[s.tableCell, s.paddedCell, s.checkedButton].join(' ')}>
      {card === paymentMethod.id && (
        <img src={checkImg} alt="checkedButton" className={s.checkedImg} />
      )}
    </div>
    <div className={s.mobileTable}>
      <div className={s.mobileRow1}>
        <div className={s.tableCell}>
          <img
            src={card === paymentMethod.id ? src : srcGrey}
            alt={alt}
            className={s.cardIcon}
          />
        </div>
        <div className={[s.tableCell, s.cardName].join(' ')}>
          {paymentMethod.cardName || brandText}
        </div>
      </div>
      <div className={s.mobileRow2}>
        <div className={[s.tableCell, s.paddedCell, s.cardDigits].join(' ')}>
          <span className={s.hiddenDigits}>{'\u2022\u2022\u2022\u2022 '}</span>
          {paymentMethod.last4digits}
        </div>
        <div className={[s.tableCell, s.paddedCell, s.expireAt].join(' ')}>
          {moment(paymentMethod.expireAt).format('MM/YY')}
        </div>
      </div>
    </div>
    <div className={[s.tableCell, s.paddedCell, s.deleteButtonCell].join(' ')}>
      <button
        type="button"
        className={s.deleteButton}
        onClick={onClickDeleteButton}
      >
        <i className={`icon-ec-close ${deleteIconClassName}`} />
      </button>
    </div>
  </div>
);

SavedCardsLine.propTypes = {
  card: PropTypes.string,
  paymentMethod: PaymentMethodType.isRequired,
  src: PropTypes.string.isRequired,
  srcGrey: PropTypes.string.isRequired,
  alt: PropTypes.string,
  brandText: PropTypes.string.isRequired,
  onClickDeleteButton: PropTypes.func.isRequired,
  deleteIconClassName: PropTypes.string,
  onSelectLine: PropTypes.func.isRequired,
  checkImg: PropTypes.string.isRequired,
};

SavedCardsLine.defaultProps = {
  deleteIconClassName: undefined,
  alt: '',
  card: null,
};

export default SavedCardsLine;

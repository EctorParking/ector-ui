import React from 'react';
import PropTypes from 'prop-types';
import s from './SavedCardsPicker.module.css';
import SavedCardsPickerHeader from './SavedCardsPickerHeader';
import SavedCardsPickerTextTypes from './SavedCardsPickerTextTypes';
import PaymentMethodType from './PaymentMethodType';
import LinkUnderlined from '../LinkUnderlined';

class SavedCardsPicker extends React.PureComponent {
  renderContent() {
    const {
      renderSavedCardsLine, paymentMethods, onClickStripeModal, card, texts,
    } = this.props;

    const renderOneLine = renderSavedCardsLine(card);

    return (
      <div className={s.paymentMethodBox}>
        <table cellSpacing="0" className={s.paymentCardsTable}>
          <thead>
            <tr>
              <th />
              <th className={s.paymentCardsHeader}>
                {texts.typeCard}
              </th>
              <th className={s.paymentCardsHeader}>{texts.number}</th>
              <th className={s.paymentCardsHeader}>
                {texts.expire}
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentMethods.map(renderOneLine)}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">
                <div className={s.paymentTableFooter}>
                  <img
                    src={texts.srcCardIcon}
                    className={s.addPaymentCardIcon}
                    alt=""
                  />
                  <LinkUnderlined onClick={onClickStripeModal} className={s.addCardButton}>
                    <strong>{texts.addCard}</strong>
                  </LinkUnderlined>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }

  render() {
    const {
      className,
      onRadioButtonChange,
      value,
      isSelected,
      texts,
    } = this.props;

    return (
      <div className={[s.card, className].join(' ')}>
        <div className={s.left}>
          <SavedCardsPickerHeader
            isSelected={isSelected}
            onRadioButtonChange={onRadioButtonChange}
            value={value}
            texts={texts}
          />
          {isSelected && this.renderContent()}
        </div>
      </div>
    );
  }
}

SavedCardsPicker.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  isSelected: PropTypes.bool.isRequired,
  onRadioButtonChange: PropTypes.func.isRequired,
  paymentMethods: PropTypes.arrayOf(PaymentMethodType).isRequired,
  onClickStripeModal: PropTypes.func.isRequired,
  renderSavedCardsLine: PropTypes.func.isRequired,
  card: PropTypes.string,
  texts: SavedCardsPickerTextTypes.isRequired,
};

SavedCardsPicker.defaultProps = {
  className: undefined,
  value: '',
};


export default SavedCardsPicker;

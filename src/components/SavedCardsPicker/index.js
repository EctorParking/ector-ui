import React from 'react';
import PropTypes from 'prop-types';
import s from './SavedCardsPicker.module.css';
import SavedCardsPickerHeader from './SavedCardsPickerHeader';
import SavedCardsPickerTextTypes from './SavedCardsPickerTextTypes';
import PaymentMethodType from './PaymentMethodType';
import LinkUnderlined from '../LinkUnderlined';

const CardTypes = {
  total: 'total',
  stripe: 'stripe',
};

class SavedCardsPicker extends React.PureComponent {
  renderContent() {
    const {
      SavedCardsLineComponent,
      paymentMethods,
      onClickAddCardModal,
      texts,
      showHeader,
      EmptyPaymentMethodsComponent,
      cardType,
    } = this.props;

    return (
      <div className={s.paymentMethodBox}>
        <table cellSpacing="0" className={s.paymentCardsTable}>
          { showHeader && (
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
          )}
          <tbody>
            {paymentMethods.length > 0
              ? paymentMethods.map(SavedCardsLineComponent)
              : <EmptyPaymentMethodsComponent />}
          </tbody>
        </table>
        {paymentMethods.length > 0 && (
        <>
          <div className={s.paymentTableFooter}>
            <img
              src={texts.srcCardIcon}
              className={s.addPaymentCardIcon}
              alt=""
            />
            <LinkUnderlined onClick={onClickAddCardModal} className={s.addCardButton}>
              <strong>
                {cardType === CardTypes.stripe
                  ? texts.addCard
                  : texts.addTotalCard}
              </strong>
            </LinkUnderlined>
          </div>
          <div>
            {cardType === CardTypes.total
                && (
                  <p className={s.informationTotalRefund}>
                    {texts.informationTotalRefund}
                  </p>
                )}
          </div>
        </>
        )}
      </div>
    );
  }

  render() {
    const {
      className,
      onRadioButtonChange,
      cardType,
      isSelected,
      texts,
    } = this.props;

    return (
      <div className={[s.card, className].join(' ')}>
        <div className={s.left}>
          <SavedCardsPickerHeader
            isSelected={isSelected}
            onRadioButtonChange={onRadioButtonChange}
            cardType={cardType}
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
  cardType: PropTypes.string,
  isSelected: PropTypes.bool.isRequired,
  onRadioButtonChange: PropTypes.func.isRequired,
  paymentMethods: PropTypes.arrayOf(PaymentMethodType).isRequired,
  onClickAddCardModal: PropTypes.func.isRequired,
  SavedCardsLineComponent: PropTypes.func.isRequired,
  texts: SavedCardsPickerTextTypes.isRequired,
  showHeader: PropTypes.bool,
  EmptyPaymentMethodsComponent: PropTypes.func.isRequired,
};

SavedCardsPicker.defaultProps = {
  className: undefined,
  cardType: '',
  showHeader: false,
};


export default SavedCardsPicker;

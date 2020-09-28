import React from 'react';
import PropTypes from 'prop-types';
import s from './SavedCardsPicker.module.css';
import SavedCardsPickerHeader from './SavedCardsPickerHeader';
import SavedCardsPickerTextTypes from './SavedCardsPickerTextTypes';
import PaymentMethodType from './PaymentMethodType';
import LinkUnderlined from '../LinkUnderlined';
import Loader from '../Loader';

const CardTypes = {
  total: 'total',
  stripe: 'stripe',
};

class SavedCardsPicker extends React.PureComponent {
  renderContent() {
    const {
      SavedCardsLineComponent,
      paymentMethods,
      onClickAddCard,
      texts,
      showHeader,
      PaymentFormComponent,
      cardType,
      showForm,
      card,
      fetching,
    } = this.props;

    return (
      <div className={s.paymentMethodBox}>
        <div className={s.paymentCardsTable}>
          { showHeader && (
            <div className={s.paymentCardsHeaderRow}>
              <div className={[s.typeCardHeader, s.paymentCardsHeader].join(' ')}>
                {texts.typeCard}
              </div>
              <div className={[s.numberHeader, s.paymentCardsHeader].join(' ')}>{texts.number}</div>
              <div className={[s.expireHeader, s.paymentCardsHeader].join(' ')}>
                {texts.expire}
              </div>
            </div>
          )}
          {paymentMethods.length > 0
            ? paymentMethods.map(paymentMethod => SavedCardsLineComponent(paymentMethod, card))
            : <PaymentFormComponent />}
          {fetching && <Loader size="xSmall" />}
        </div>
        {paymentMethods.length > 0 && !showForm && (
        <>
          <div className={s.paymentTableFooter}>
            <img
              src={texts.srcCardIcon}
              className={s.addPaymentCardIcon}
              alt=""
            />
            <LinkUnderlined onClick={onClickAddCard} className={s.addCardButton}>
              <strong>
                {cardType === CardTypes.stripe
                  ? texts.addCard
                  : texts.addTotalCard}
              </strong>
            </LinkUnderlined>
          </div>
        </>
        )}
        {showForm && (<PaymentFormComponent />)}
        <div>
          {cardType === CardTypes.total
                && (
                  <p className={s.informationTotalRefund}>
                    {texts.informationTotalRefund}
                  </p>
                )}
        </div>
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
      isRadioButtonVisible,
    } = this.props;

    return (
      <div className={[s.card, className].join(' ')}>
        <div className={s.left}>
          <SavedCardsPickerHeader
            isSelected={isSelected}
            onRadioButtonChange={onRadioButtonChange}
            cardType={cardType}
            texts={texts}
            isRadioButtonVisible={isRadioButtonVisible}
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
  onClickAddCard: PropTypes.func.isRequired,
  SavedCardsLineComponent: PropTypes.func.isRequired,
  texts: SavedCardsPickerTextTypes.isRequired,
  showHeader: PropTypes.bool,
  PaymentFormComponent: PropTypes.func.isRequired,
  showForm: PropTypes.bool,
  card: PropTypes.string,
  isRadioButtonVisible: PropTypes.bool,
  fetching: PropTypes.bool,
};

SavedCardsPicker.defaultProps = {
  className: undefined,
  cardType: '',
  showHeader: false,
  showForm: false,
  card: '',
  isRadioButtonVisible: true,
  fetching: false,
};


export default SavedCardsPicker;

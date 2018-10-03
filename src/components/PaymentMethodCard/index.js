import React from 'react';
import PropTypes from 'prop-types';
import s from './PaymentMethodCard.css';
import TextsType, { DefaultTexts } from './PaymentmethodTextsType';
import PaymentMethodType from './PaymentMethodType';
import PaymentMethodCardContent from './PaymentMethodCardContent';
import PaymentMethodCardFooter from './PaymentMethodCardFooter';
import { Card } from '..';

class PaymentMethodCard extends React.Component {
  renderFooter = (footerProps) => {
    const { texts, onClick, selected } = this.props;

    return (
      <PaymentMethodCardFooter
        {...footerProps}
        texts={texts}
        onClick={onClick}
        selected={selected}
      />
    );
  };

  render() {
    const {
      selected, children, paymentMethod, texts, ...cardProps
    } = this.props;

    return (
      <Card
        {...cardProps}
        FooterComponent={this.renderFooter}
        isSelected={selected}
        contentClassName={s.card}
      >
        {
          children === null ? (
            <PaymentMethodCardContent paymentMethod={paymentMethod} texts={texts} />
          ) : children
        }
      </Card>
    );
  }
}

PaymentMethodCard.defaultProps = {
  selected: false,
  deletable: true,
  pendingDeletion: false,
  texts: DefaultTexts,
  onClick: () => {},
  onDelete: () => {},
  onCancelDeletion: () => {},
  onConfirmDeletion: () => {},
  children: null,
  idPrefix: 'paymentMethodCard',
  className: undefined,
};

PaymentMethodCard.propTypes = {
  paymentMethod: PaymentMethodType.isRequired,
  deletable: PropTypes.bool,
  selected: PropTypes.bool,
  pendingDeletion: PropTypes.bool,
  texts: TextsType,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onCancelDeletion: PropTypes.func,
  onConfirmDeletion: PropTypes.func,
  idPrefix: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PaymentMethodCard;

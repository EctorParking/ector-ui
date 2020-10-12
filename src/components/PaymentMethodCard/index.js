import React from 'react';
import PropTypes from 'prop-types';
import s from './PaymentMethodCard.module.css';
import TextsType, { DefaultTexts } from './PaymentMethodTextsType';
import PaymentMethodType from './PaymentMethodType';
import PaymentMethodCardContent from './PaymentMethodCardContent';
import PaymentMethodCardFooter from './PaymentMethodCardFooter';
import PaymentMethodCardHeader from './PaymentMethodCardHeader';
import { Card } from '..';

class PaymentMethodCard extends React.Component {
  renderFooter = (footerProps) => {
    const {
      texts, onClick, selected, FooterComponent, testid,
    } = this.props;

    if (typeof FooterComponent !== 'undefined' && !FooterComponent) {
      return null;
    } if (typeof FooterComponent === 'function') {
      return FooterComponent(footerProps);
    }
    return (
      <PaymentMethodCardFooter
        {...footerProps}
        texts={texts}
        onClick={onClick}
        selected={selected}
        testid={testid}
      />
    );
  };

  render() {
    const {
      selected,
      children,
      paymentMethod,
      texts,
      pendingDeletion,
      onConfirmDeletion,
      onCancelDeletion,
      deletable,
      onDelete,
      contentClassName,
      className,
      ...cardProps
    } = this.props;
    const cardContentProps = {
      paymentMethod, texts, pendingDeletion, onConfirmDeletion, onCancelDeletion,
    };
    const cardHeaderProps = {
      onDelete, texts, pendingDeletion,
    };

    return (
      <Card
        {...cardProps}
        className={[s.card, className].join(' ')}
        FooterComponent={this.renderFooter}
        isSelected={selected}
        contentClassName={[s.cardContent, pendingDeletion ? s.pendingDeletion : undefined, contentClassName].join(' ')}
      >
        {
          deletable && (
            <PaymentMethodCardHeader {...cardHeaderProps} className={s.header} />
          )
        }
        {
          children === null ? (
            <PaymentMethodCardContent {...cardContentProps} />
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
  FooterComponent: undefined,
  contentClassName: undefined,
  testid: '',
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
  FooterComponent: PropTypes.func,
  contentClassName: PropTypes.string,
  testid: PropTypes.string,
};

export default PaymentMethodCard;

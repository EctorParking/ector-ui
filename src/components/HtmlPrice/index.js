import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../Services';

const HtmlPrice = ({
  price,
  currency,
  showDecimals,
  className,
  separator,
  PriceAppendComponent,
  appendix,
}) => {
  const splitPrice = `${formatPrice(price, showDecimals)}`.split('.');

  return splitPrice[1] ? (
    <span className={className}>
      {`${splitPrice[0]}${separator}`}
      <PriceAppendComponent value={splitPrice[1]} currency={currency} appendix={appendix} />
    </span>
  ) : (
    <span className={className}>
      {`${splitPrice[0]}`}
      <PriceAppendComponent value="" currency={currency} appendix={appendix} />
    </span>
  );
};

const PriceAppendDefaultComponent = ({ value, currency }) => <small>{`${value}${currency}`}</small>;

PriceAppendDefaultComponent.propTypes = {
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

HtmlPrice.defaultProps = {
  currency: '€',
  className: undefined,
  showDecimals: false,
  separator: '.',
  appendix: '',
  PriceAppendComponent: PriceAppendDefaultComponent,
};

HtmlPrice.propTypes = {
  price: PropTypes.string.isRequired,
  showDecimals: PropTypes.bool,
  currency: PropTypes.string,
  className: PropTypes.string,
  separator: PropTypes.string,
  appendix: PropTypes.string,
  PriceAppendComponent: PropTypes.func,
};

export default HtmlPrice;

import React from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../../Services/Utils';

const HtmlPrice = ({
  price,
  currency,
  showDecimals,
  className,
}) => {
  const sep = `${formatPrice(price, showDecimals)}`.split('.');

  return sep[1] ? (
    <span className={className}>
      {sep[0]}
      <small>
        .{sep[1]}
        {currency}
      </small>
    </span>
  ) : (
    <span className={className}>
      {sep[0]}
      {currency}
    </span>
  );
};

HtmlPrice.defaultProps = {
  currency: '€',
  className: '',
};

HtmlPrice.propTypes = {
  price: PropTypes.string.isRequired,
  showDecimals: PropTypes.bool.isRequired,
  currency: PropTypes.string,
  className: PropTypes.string,
};

export default HtmlPrice;

import React from 'react';
import PropTypes from 'prop-types';
import PricingSummaryTextsType from './PricingSummaryTextsType';
import PricingSummaryOptionType from './PricingSummaryOptionType';
import PricingSummaryOption from './PricingSummaryOption';

import s from './PricingSummary.css';

const PricingSummary = ({
  currency,
  currencyPosition,
  options,
  texts,
  onAddClick,
  className,
}) => (
  <div className={`${s.pricingSummary} ${className}`}>
    <div className={s.options}>
      {
        options.map(option => (
          <PricingSummaryOption
            currency={currency}
            currencyPosition={currencyPosition}
            option={option}
          />
        ))
      }
    </div>
    <button
      onClick={onAddClick}
      className={s.add}
    >
            +
      <span>{texts.addOption}</span>
    </button>

    <div className={s.total}>
      <span className={s.totalLabel}>
        {texts.total}
      </span>
      <span className={`${s.totalPrice} ${s[`currency-${currencyPosition}`]}`}>
        <span>
          {options.reduce((acc, val) => acc + val.price, 0)}
        </span>
        <span>{currency}</span>
      </span>
    </div>
  </div>
);

PricingSummary.defaultProps = {
  currencyPosition: 'after',
  onAddClick: () => {},
  className: '',
};

PricingSummary.propTypes = {
  currency: PropTypes.string.isRequired,
  currencyPosition: PropTypes.oneOf(['before', 'after']),
  options: PropTypes.arrayOf(PricingSummaryOptionType).isRequired,
  texts: PricingSummaryTextsType.isRequired,
  onAddClick: PropTypes.func,
  className: PropTypes.string,
};

export default PricingSummary;

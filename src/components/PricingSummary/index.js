import React from 'react';
import PropTypes from 'prop-types';
import PricingSummaryTextsType, {
  defaultTexts,
} from './PricingSummaryTextsType';
import PricingSummaryOptionType from './PricingSummaryOptionType';
import PricingSummaryOption from './PricingSummaryOption';

import s from './PricingSummary.module.css';

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
      {options.map(option => (
        <PricingSummaryOption
          currency={currency}
          currencyPosition={currencyPosition}
          option={option}
          key={option.label}
        />
      ))}
    </div>
    <button onClick={onAddClick} className={s.add}>
      +<span>{texts.addOption}</span>
    </button>

    <div className={s.total}>
      <span className={s.totalLabel}>{texts.total}</span>
      <span className={`${s.totalPrice} ${s[`currency-${currencyPosition}`]}`}>
        <span>{options.reduce((acc, val) => acc + val.price, 0)}</span>
        <span>{currency}</span>
      </span>
    </div>
  </div>
);

PricingSummary.defaultProps = {
  currencyPosition: 'after',
  onAddClick: () => {},
  className: '',
  texts: defaultTexts,
};

PricingSummary.propTypes = {
  currency: PropTypes.string.isRequired,
  currencyPosition: PropTypes.oneOf(['before', 'after']),
  options: PropTypes.arrayOf(PricingSummaryOptionType).isRequired,
  texts: PricingSummaryTextsType,
  onAddClick: PropTypes.func,
  className: PropTypes.string,
};

export default PricingSummary;

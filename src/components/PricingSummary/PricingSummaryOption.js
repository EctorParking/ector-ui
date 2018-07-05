import React from 'react';
import PropTypes from 'prop-types';
import PricingSummaryOptionType from './PricingSummaryOptionType';

import s from './PricingSummaryOption.css';

const PricingSummaryOption = ({
    currency,
    currencyPosition,
    option,
}) => (
    <div className={s.option}>
        <span className={s.label}>
            {option.label}

            <i className="icon icon-ec-info" />
        </span>

        <span className={`${s.price} ${s[`currency-${currencyPosition}`]}`}>
            <span>{option.price}</span>
            <span>{currency}</span>
        </span>
    </div>
);

PricingSummaryOption.defaultProps = {
    currencyPosition: 'after',
};

PricingSummaryOption.propTypes = {
    currency: PropTypes.string.isRequired,
    currencyPosition: PropTypes.oneOf(['before', 'after']),
    option: PricingSummaryOptionType.isRequired,
};

export default PricingSummaryOption;

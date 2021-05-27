import React from 'react';
import PropTypes from 'prop-types';
import RideSummaryTextType, { defaultTexts } from './RideSummaryTextsType';

import s from './RideSummary.module.css';

const RideSummary = ({ texts, className, type }) => (
  <div className={`${s.rideSummary} ${className}`}>
    <p className={s.rideSummaryTitle}>{texts.title}</p>
    <p className={s.rideSummaryText}>{texts.date}</p>
    <p className={s.rideSummaryText}>{texts.spot}</p>
    {type === 'out' && (
      <p className={s.rideSummaryText}>{texts.travelingNumber}</p>
    )}
  </div>
);

RideSummary.defaultProps = {
  className: '',
  texts: defaultTexts,
  type: '',
};

RideSummary.propTypes = {
  texts: RideSummaryTextType,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default RideSummary;

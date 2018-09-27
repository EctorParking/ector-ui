import React from 'react';
import PropTypes from 'prop-types';
import RideSummaryTextType, { defaultTexts } from './RideSummaryTextsType';

import s from './RideSummary.css';

const RideSummary = ({ texts, className }) => (
  <div className={`${s.rideSummary} ${className}`}>
    <p className={s.rideSummaryTitle}>{texts.title}</p>
    <p>{texts.date}</p>
    <p>{texts.spot}</p>
  </div>
);

RideSummary.defaultProps = {
  className: '',
  texts: defaultTexts,
};

RideSummary.propTypes = {
  texts: RideSummaryTextType,
  className: PropTypes.string,
};

export default RideSummary;

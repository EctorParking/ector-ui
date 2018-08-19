import React from 'react';
import PropTypes from 'prop-types';
import ReferralCardTextsType from './ReferralCardTextsType';

import s from './ReferralCard.css';

const ReferralCard = ({ texts, className }) => (
  <div className={`${s.referralCard} ${className}`}>
    <i className="icon icon-ec-referral" />
    <div>
      <strong>{texts.title}</strong>
      <p>{texts.description}</p>
    </div>
  </div>
);

ReferralCard.defaultProps = {
  className: '',
};

ReferralCard.propTypes = {
  texts: ReferralCardTextsType.isRequired,
  className: PropTypes.string,
};

export default ReferralCard;

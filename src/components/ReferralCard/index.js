import React from 'react';
import ReferralCardTextsType from './ReferralCardTextsType';

import s from './ReferralCard.css';

const ReferralCard = ({ texts }) => (
  <div className={s.referralCard}>
    <i className="icon icon-ec-referral" />
    <div>
      <strong>{texts.title}</strong>
      <p>{texts.description}</p>
    </div>
  </div>
);

ReferralCard.propTypes = {
  texts: ReferralCardTextsType.isRequired,
};

export default ReferralCard;

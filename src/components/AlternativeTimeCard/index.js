import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import AlternativeTimeCardFooter from './AlternativeTimeCardFooter';
import AlternativeTimeCardTextsType from './AlternativeTimeCardTextsType';
import AlternativeTimeCardAlternativeType from './AlternativeTimeCardAlternativeType';

import s from './AlternativeTimeCard.css';

const AlternativeTimeCard = ({
  texts,
  alternative,
  mode,
  onSelect,
  testid,
}) => {
  const footer = mode !== 'selectedWithoutFooter' ? (
    <AlternativeTimeCardFooter
      mode={mode}
      texts={texts}
      onSelect={onSelect}
      testid={testid}
    />
  ) : null;

  const header = (
    <div className={s.header}>
      <strong>{alternative.date}</strong>
      {alternative.spot}
    </div>
  );

  return (
    <Card
      isSelected={mode.indexOf('selected') === 0}
      HeaderChildren={header}
      FooterChildren={footer}
      className={s.container}
      contentClassName={s.content}
      footerClassName={s.footerContainer}
    >
      <i className="icon icon-ec-clock" />
      {alternative.time}
    </Card>
  );
};

AlternativeTimeCard.propTypes = {
  texts: AlternativeTimeCardTextsType.isRequired,
  alternative: AlternativeTimeCardAlternativeType.isRequired,
  mode: PropTypes.oneOf(['normal', 'selectedWithFooter', 'selectedWithoutFooter']).isRequired,
  onSelect: PropTypes.func.isRequired,
  testid: PropTypes.string,
};

AlternativeTimeCard.defaultProps = {
  testid: '',
};

export default AlternativeTimeCard;

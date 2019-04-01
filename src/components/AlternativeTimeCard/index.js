import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import AlternativeTimeCardFooter from './AlternativeTimeCardFooter';
import AlternativeTimeCardTextsType from './AlternativeTimeCardTextsType';
import AlternativeTimeCardAlternativeType from './AlternativeTimeCardAlternativeType';

import s from './AlternativeTimeCard.module.css';

const AlternativeTimeCard = ({
  texts,
  alternative,
  mode,
  onSelect,
  testid,
  className,
  ...cardProps
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
      className={`${s.container} ${className}`}
      contentClassName={s.content}
      footerClassName={s.footerContainer}
      {...cardProps}
    >
      <i className="icon icon-ec-clock" />
      {alternative.time}
    </Card>
  );
};

AlternativeTimeCard.propTypes = {
  texts: AlternativeTimeCardTextsType,
  alternative: AlternativeTimeCardAlternativeType.isRequired,
  mode: PropTypes.oneOf(['normal', 'selectedWithFooter', 'selectedWithoutFooter']).isRequired,
  onSelect: PropTypes.func.isRequired,
  testid: PropTypes.string,
  className: PropTypes.string,
};

AlternativeTimeCard.defaultProps = {
  testid: '',
  className: '',
  texts: {
    select: 'Sélectionner',
  },
};

export default AlternativeTimeCard;

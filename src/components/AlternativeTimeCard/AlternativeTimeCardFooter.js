import React from 'react';
import PropTypes from 'prop-types';
import AlternativeTimeCardTextsType from './AlternativeTimeCardTextsType';
import LinkUnderlined from '../LinkUnderlined';

const AlternativeTimeCardFooter = ({ texts, mode, onSelect }) => {
  if (mode === 'normal') {
    return <LinkUnderlined onClick={onSelect}>{texts.select}</LinkUnderlined>;
  }

  return null;
};

AlternativeTimeCardFooter.propTypes = {
  texts: AlternativeTimeCardTextsType.isRequired,
  mode: PropTypes.oneOf(['normal', 'selectedWithFooter', 'selectedWithoutFooter']).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default AlternativeTimeCardFooter;

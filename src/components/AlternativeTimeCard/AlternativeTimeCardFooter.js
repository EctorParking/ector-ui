import React from 'react';
import PropTypes from 'prop-types';
import AlternativeTimeCardTextsType from './AlternativeTimeCardTextsType';
import LinkUnderlined from '../LinkUnderlined';

const AlternativeTimeCardFooter = ({ texts, mode, onSelect, testid }) => {
  if (mode === 'normal') {
    return <LinkUnderlined testid={testid} onClick={onSelect}>{texts.select}</LinkUnderlined>;
  }

  return null;
};

AlternativeTimeCardFooter.propTypes = {
  texts: AlternativeTimeCardTextsType.isRequired,
  mode: PropTypes.oneOf(['normal', 'selectedWithFooter', 'selectedWithoutFooter']).isRequired,
  onSelect: PropTypes.func.isRequired,
  testid: PropTypes.string,
};

AlternativeTimeCardFooter.defaultProps = {
  testid: '',
};

export default AlternativeTimeCardFooter;

import React from 'react';
import PropTypes from 'prop-types';
import s from './ZoneSuggestion.css';

const ZoneSuggestion = ({
  name, onClick, split, selected, disabled, ...rest
}) => (
  <span
    role="presentation"
    className={[s.zone, split ? undefined : s.hovered, selected ? s.selected : undefined, disabled ? s.disabled : undefined].join(' ')}
    onClick={onClick}
    {...rest}
  >
    {name}
  </span>
);

ZoneSuggestion.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  split: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ZoneSuggestion;

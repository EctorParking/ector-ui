import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '..';
import { Type as ZoneType, ZoneTypesToIconName, ZoneTypes } from './ZoneType';
import s from './ZoneSuggestion.module.css';

const IconComponent = ({ name, className: iconClassName }) => (
  <i className={[`icon icon-${name}`, iconClassName, name === ZoneTypesToIconName[ZoneTypes.station] ? s.trainIcon : undefined].join(' ')} />
);

IconComponent.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const ZoneSuggestion = ({
  value, onClick, split, selected, disabled, ...rest
}) => (
  <span
    role="presentation"
    className={[s.suggestion, split ? undefined : s.hovered, selected ? s.selected : undefined, disabled ? s.disabled : undefined].join(' ')}
    onClick={onClick}
    {...rest}
  >
    <Icon
      name={ZoneTypesToIconName[value.type]}
      variant={disabled ? 'grey' : 'blue'}
      position="left"
      className={[s.icon, disabled ? s.disabled : s.activeIcon].join(' ')}
      IconComponent={IconComponent}
    />
    <span className={s.zoneName}>{value.name}</span>
  </span>
);

ZoneSuggestion.defaultProps = {
  selected: false,
  disabled: false,
  split: false,
  onClick: () => null,
};

ZoneSuggestion.propTypes = {
  value: ZoneType.isRequired,
  onClick: PropTypes.func,
  split: PropTypes.bool,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ZoneSuggestion;

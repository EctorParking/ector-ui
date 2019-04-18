import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '..';
import { Type as ZoneType, ZoneTypesToIconName, ZoneTypes } from './ZoneType';
import s from './ZoneSuggestion.module.css';

const iconNameToMarginClassName = {
  [ZoneTypesToIconName[ZoneTypes.station]]: s.trainIcon,
  [ZoneTypesToIconName[ZoneTypes.airport]]: s.airportIcon,
  [ZoneTypesToIconName[ZoneTypes.mixed]]: s.mixedIcon,
};

const IconComponent = ({ name, className: iconClassName }) => (
  <i className={[
    iconNameToMarginClassName[name],
    `icon icon-${name}`,
    iconClassName,
  ].join(' ')}
  />
);

IconComponent.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const ZoneSuggestion = ({
  value, onClick, selected, disabled, className, ...rest
}) => (
  <span
    role="presentation"
    className={[s.suggestion, selected ? s.selected : undefined, disabled ? s.disabled : undefined, className].join(' ')}
    onClick={onClick}
    {...rest}
  >
    <Icon
      type={value.type}
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
  className: undefined,
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
  className: PropTypes.string,
};

export default ZoneSuggestion;

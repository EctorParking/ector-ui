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
  value, onClick, selected, disabled, className, search, Icon: IconProps, ...rest
}) => {
  const IconComputed = IconProps() ? IconProps : Icon;

  return (
    <span
      role="presentation"
      className={[s.suggestion, selected ? s.selected : undefined, disabled ? s.disabled : undefined, className].join(' ')}
      onClick={onClick}
      {...rest}
    >
      <IconComputed
        type={value.type}
        name={ZoneTypesToIconName[value.type]}
        variant={disabled ? 'grey' : 'blue'}
        position="left"
        className={[s.icon, disabled ? s.disabled : s.activeIcon].join(' ')}
        IconComponent={IconComponent}
      />
      <span
        className={s.zoneName}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: value.name.replace(new RegExp(`(${search})`, 'i'), '<strong>$1</strong>'),
        }}
      />
    </span>
  );
};

ZoneSuggestion.defaultProps = {
  className: undefined,
  selected: false,
  disabled: false,
  onClick: () => null,
  search: '',
  Icon: undefined,
};

ZoneSuggestion.propTypes = {
  value: ZoneType.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  search: PropTypes.string,
  Icon: PropTypes.func,
};

export default ZoneSuggestion;

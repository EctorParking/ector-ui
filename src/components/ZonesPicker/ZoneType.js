import PropTypes from 'prop-types';

export const ZoneTypes = {
  airport: 'airport',
  station: 'station',
  mixed: 'mixed',
};

export const ZoneTypesToIconName = {
  [ZoneTypes.airport]: 'ec-airport',
  [ZoneTypes.station]: 'ec-station',
  [ZoneTypes.mixed]: 'ec-airport-station',
};

export const Type = PropTypes.shape({
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(ZoneTypes)).isRequired,
});

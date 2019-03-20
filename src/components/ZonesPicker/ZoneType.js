import PropTypes from 'prop-types';

export const ZoneTypes = {
  airport: 'airport',
  station: 'station',
};

export const ZoneTypesToIconName = {
  [ZoneTypes.airport]: 'ec-plane',
  [ZoneTypes.station]: 'ec-station',
};

export const Type = PropTypes.shape({
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(ZoneTypes)).isRequired,
});

import PropTypes from 'prop-types';

export const ZoneTypes = {
  airport: 'airport',
  station: 'station',
};

export const SpotType = PropTypes.shape({
  shortName: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(ZoneTypes)).isRequired,
});

export const ZoneType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(ZoneTypes)).isRequired,
  spots: PropTypes.arrayOf(SpotType).isRequired,
});

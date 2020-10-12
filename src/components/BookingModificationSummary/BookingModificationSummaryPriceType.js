import PropTypes from 'prop-types';

const FeePropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export default PropTypes.shape({
  initialPrice: PropTypes.string,
  routingFee: FeePropType,
  parkingFee: FeePropType,
  yieldsFee: FeePropType,
  administrativeFee: FeePropType,
  countRoutingFee: PropTypes.number,
  countParkingFee: PropTypes.number,
  countAdministrativeFee: PropTypes.number,
  total: PropTypes.string,
});

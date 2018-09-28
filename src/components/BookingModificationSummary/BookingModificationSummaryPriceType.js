import PropTypes from 'prop-types';

export default PropTypes.shape({
  initialPrice: PropTypes.number,
  routingFee: PropTypes.number,
  parkingFee: PropTypes.number,
  administrativeFee: PropTypes.number,
  leftToPay: PropTypes.number,
});

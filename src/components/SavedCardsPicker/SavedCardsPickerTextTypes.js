import PropTypes from 'prop-types';

export default PropTypes.shape({
  typeCard: PropTypes.string,
  expire: PropTypes.string,
  number: PropTypes.string,
  srcCardIcon: PropTypes.string,
  addCard: PropTypes.string,
  addTotalCard: PropTypes.string,
  titleStripe: PropTypes.string,
  titleTotal: PropTypes.string,
  iconVisa: PropTypes.string,
  iconMastercard: PropTypes.string,
  iconAmerican: PropTypes.string,
  iconBusinessEdenRed: PropTypes.string,
  iconTotal: PropTypes.string,
  informationTotalRefund: PropTypes.object,
});

import PropTypes from 'prop-types';

export default PropTypes.shape({
  last4digits: PropTypes.string,
  brand: PropTypes.oneOf(['visa', 'mastercard', 'american', 'cb', 'totalgr']),
  type: PropTypes.oneOf(['card', 'account', 'sepa', 'saved-total']),
  expireAt: PropTypes.string,
  cardName: PropTypes.string,
});

import PropTypes from 'prop-types';

export default PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  gender: PropTypes.oneOf(['male', 'female']),
});

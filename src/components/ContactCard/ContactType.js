import PropTypes from 'prop-types';

export default PropTypes.shape({
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  title: PropTypes.oneOf(['male', 'female']),
});

import PropTypes from 'prop-types';

export default PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  title: PropTypes.oneOf(['male', 'female']),
});

export const ContactFormValuesType = PropTypes.shape({
  email: PropTypes.string,
  phone: PropTypes.string,
});

export const ContactFormErrorsType = PropTypes.shape({
  email: PropTypes.string,
  phone: PropTypes.string,
});

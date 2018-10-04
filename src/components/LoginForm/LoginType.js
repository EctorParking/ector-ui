import PropTypes from 'prop-types';

export const LoginFormValuesType = PropTypes.shape({
  email: PropTypes.string,
  password: PropTypes.string,
});

export const LoginFormErrorsType = PropTypes.shape({
  email: PropTypes.string,
  password: PropTypes.string,
});

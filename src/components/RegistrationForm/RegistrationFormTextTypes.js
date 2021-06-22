import PropTypes from 'prop-types';

export default PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
});

const defaultTexts = {
  firstName: 'Prénom',
  lastName: 'Nom',
  phone: 'Téléphone mobile',
  email: 'Email',
  password: 'Mot de passe',
  passwordConfirmation: 'Confirmation de mot de passe',
};

const ValuesType = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
});

const ErrorsType = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
});

const defaultValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const defaultErrors = {
  firstName: null,
  lastName: null,
  phone: null,
  email: null,
  password: null,
  passwordConfirmation: null,
};

export { defaultTexts, ValuesType, ErrorsType, defaultValues, defaultErrors };

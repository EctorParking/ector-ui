import PropTypes from 'prop-types';

export default PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  postalCode: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
  title: PropTypes.string,
});

const defaultTexts = {
  male: 'M',
  female: 'Mme',
  firstName: 'Prénom',
  lastName: 'Nom',
  postalCode: 'Code postal',
  phone: 'Téléphone mobile',
  email: 'Email',
  password: 'Mot de passe',
  passwordConfirmation: 'Confirmation de mot de passe',
  title: 'Civilité',
};

const ValuesType = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  postalCode: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
  title: PropTypes.string,
});

const ErrorsType = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  postalCode: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
  title: PropTypes.string,
});

const defaultValues = {
  firstName: '',
  lastName: '',
  postalCode: '',
  phone: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  title: '',
};

const defaultErrors = {
  firstName: null,
  lastName: null,
  postalCode: null,
  phone: null,
  email: null,
  password: null,
  passwordConfirmation: null,
  title: null,
};


export {
  defaultTexts,
  ValuesType,
  ErrorsType,
  defaultValues,
  defaultErrors,
};

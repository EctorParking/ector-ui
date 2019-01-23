import PropTypes from 'prop-types';

export default PropTypes.shape({
  male: PropTypes.string,
  female: PropTypes.string,
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
  male: 'Mr',
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

const radioDefaultValues = {
  male: 'Mr',
  female: 'Mme',
};

const OnChangesRegistrationFormType = {
  gender: PropTypes.func,
  firstName: PropTypes.func,
  lastName: PropTypes.func,
  postalCode: PropTypes.func,
  email: PropTypes.func,
  phone: PropTypes.func,
  password: PropTypes.func,
  passwordConfirmation: PropTypes.func,
};

const defaultOnChanges = {
  gender: () => {},
  firstName: () => {},
  lastName: () => {},
  postalCode: () => {},
  email: () => {},
  phone: () => {},
  password: () => {},
  confirmPassword: () => {},
};

const ValuesType = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  postalCode: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
  title: PropTypes.string,
};

const ErrorsType = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  postalCode: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
  title: PropTypes.string,
};

const defaultValue = {
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
  radioDefaultValues,
  OnChangesRegistrationFormType,
  defaultOnChanges,
  ValuesType,
  ErrorsType,
  defaultValue,
  defaultErrors,
};

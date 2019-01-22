import PropTypes from 'prop-types';

export default PropTypes.shape({
  firstChoice: PropTypes.string,
  secondChoice: PropTypes.string,
});

const defaultTexts = {
  firstChoice: 'Mr',
  secondChoice: 'Mme',
  firstName: 'Prénom',
  lastName: 'Nom',
  postalCode: 'Code postal',
  phone: 'Téléphone mobile',
  email: 'Email',
  password: 'Mot de passe',
  confirmPassword: 'Confirmation de mot de passe',
};

const radioDefaultValues = {
  firstChoice: 'Mr',
  secondChoice: 'Mme',
};

export { defaultTexts, radioDefaultValues };

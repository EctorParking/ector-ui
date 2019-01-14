import PropTypes from 'prop-types';

export default PropTypes.shape({
  email: PropTypes.string,
  password: PropTypes.string,
  submitButton: PropTypes.string,
  onClickPasswordForgottenLabel: PropTypes.string,
});

export const DefaultTexts = {
  email: 'Email',
  password: 'Mot de passe',
  submitButton: 'Se connecter',
  onClickPasswordForgottenLabel: 'je l\'ai oublié',
};

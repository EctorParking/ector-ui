import PropTypes from 'prop-types';

export default PropTypes.shape({
  business: PropTypes.string,
  needHelp: PropTypes.string,
  login: PropTypes.string,
  faq: PropTypes.string,
  customerService: PropTypes.string,
});

export const DefaultTexts = {
  business: 'Ector Business',
  needHelp: "Besoin d'aides ?",
  login: 'Connexion',
  faq: 'Questions fréquentes',
  customerService: 'Service client',
};

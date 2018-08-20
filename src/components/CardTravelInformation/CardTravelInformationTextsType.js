import PropTypes from 'prop-types';

export default PropTypes.shape({
  title: PropTypes.string,
  outwardPlaceholder: PropTypes.string,
  outwardLabel: PropTypes.string,
  returnPlaceholder: PropTypes.string,
  returnLabel: PropTypes.string,
  businessTravel: PropTypes.string,
  mandatoryFields: PropTypes.string,
  unknownFlightNumber: PropTypes.string,
});

const defaultTexts = {
  title: 'Numéro de Vol / Train',
  outwardPlaceholder: 'AB 000',
  outwardLabel: 'Aller',
  returnPlaceholder: 'AB 0000',
  returnLabel: 'Retour',
  businessTravel: 'Voyage professionel',
  mandatoryFields: '* Champs obligatoires',
  unknownFlightNumber: 'Je ne le connais pas',
};

export { defaultTexts };

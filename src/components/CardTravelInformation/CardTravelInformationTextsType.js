import PropTypes from 'prop-types';

export default PropTypes.shape({
  title: PropTypes.string,
  travelingNumberFromPlaceholder: PropTypes.string,
  travelingNumberFromLabel: PropTypes.string,
  travelingNumberToPlaceholder: PropTypes.string,
  travelingNumberToLabel: PropTypes.string,
  businessTravel: PropTypes.string,
  unknownFlightNumber: PropTypes.string,
  returnFlightCompany: PropTypes.string,
  returnFlightOrigin: PropTypes.string,
  blank: PropTypes.string,
  updateReturnFlightCompany: PropTypes.string,
  travelingNumberTo: PropTypes.string,
});

export const DefaultTexts = {
  title: 'Numéro de Vol / Train',
  travelingNumberFromPlaceholder: 'AB 000',
  travelingNumberFromLabel: 'Aller',
  travelingNumberToPlaceholder: 'AB 0000',
  travelingNumberToLabel: 'Retour',
  businessTravel: 'Voyage professionel',
  unknownTravelingNumberTo: 'Je ne le connais pas',
  returnFlightCompany: 'Compagnie aérienne',
  returnFlightOrigin: 'Ville de provenance',
  blank: 'Non renseigné',
  updateReturnFlightCompany: 'Modifier',
  travelingNumberTo: 'Numéro billet',
};

import PropTypes from 'prop-types';

export const TextsType = PropTypes.shape({
  placeholderSpot: PropTypes.string,
  spot: PropTypes.string,
  inTitle: PropTypes.string,
  outTitle: PropTypes.string,
  travelingNumberToLabel: PropTypes.string,
  travelingNumberToPlaceholder: PropTypes.string,
  travelingNumberToLabelTrain: PropTypes.string,
  travelingNumberToPlaceholderTrain: PropTypes.string,
  returnFlightOriginLabel: PropTypes.string,
  returnFlightOriginPlaceholder: PropTypes.string,
  returnFlightCompanyLabel: PropTypes.string,
  returnFlightCompanyPlaceholder: PropTypes.string,
  unknown: PropTypes.string,
});

export const DefaultTexts = {
  placeholderSpot: 'Choisir un terminal',
  spot: 'Terminal',
  inTitle: 'Aller',
  outTitle: 'Retour',
  travelingNumberToLabel: 'N° de vol',
  travelingNumberToPlaceholder: 'Ex: AFR123',
  travelingNumberToLabelTrain: 'N° de train',
  travelingNumberToPlaceholderTrain: 'Ex: INOUI 6633',
  returnFlightOriginLabel: 'Ville de provenance',
  returnFlightOriginPlaceholder: 'Ex: Londres',
  returnFlightCompanyLabel: 'Compagnie aérienne',
  returnFlightCompanyPlaceholder: 'Ex: Air France',
  unknown: 'Je ne le connais pas',
};

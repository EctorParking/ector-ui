import PropTypes from 'prop-types';

export const TextsType = PropTypes.shape({
  placeholderSpot: PropTypes.string,
  spot: PropTypes.string,
  inTitle: PropTypes.string,
  outTitle: PropTypes.string,
  travelingNumberToLabel: PropTypes.string,
  travelingNumberToPlaceholder: PropTypes.string,
  returnFlightOriginLabel: PropTypes.string,
  returnFlightOriginPlaceholder: PropTypes.string,
  returnFlightCompanyLabel: PropTypes.string,
  returnFlightCompanyPlaceholder: PropTypes.string,
});

export const DefaultTexts = {
  placeholderSpot: 'Choisir un terminal',
  spot: 'Terminal',
  inTitle: 'Aller',
  outTitle: 'Retour',
  travelingNumberToLabel: 'N° de vol retour',
  travelingNumberToPlaceholder: 'Ex: AFR123',
  returnFlightOriginLabel: 'Ville de provenance',
  returnFlightOriginPlaceholder: 'Ex: Londres',
  returnFlightCompanyLabel: 'Compagnie aérienne',
  returnFlightCompanyPlaceholder: 'Ex: Air France',
};

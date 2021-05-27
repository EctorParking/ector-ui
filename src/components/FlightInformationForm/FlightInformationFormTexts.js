import PropTypes from 'prop-types';

export const TextsType = PropTypes.shape({
  placeholderSpot: PropTypes.string,
  spotAirport: PropTypes.string,
  spotTrain: PropTypes.string,
  spotLabelAirport: PropTypes.string,
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
  spotLabelUnknown: PropTypes.string,
  switchMandatoryAirportDescription: PropTypes.string,
  switchMandatoryStationDescription: PropTypes.string,
  noResult: PropTypes.string,
  travelingNumberToTooltip: PropTypes.string,
  returnFlightCompanyTooltip: PropTypes.string,
  returnFlightOriginTooltip: PropTypes.string,
});

export const DefaultTexts = {
  placeholderSpot: 'Sélectionner',
  spotAirport: 'Terminal',
  spotTrain: 'Gare',
  spotLabelAirport: 'Terminal (lieu de rendez-vous)',
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
  spotLabelUnknown: 'Lieu de rendez-vous',
  switchMandatoryAirportDescription:
    'Si vous ne connaissez pas votre numéro de vol, veuillez indiquer la compagnie aérienne et la ville de provenance de votre dernier vol.',
  switchMandatoryStationDescription:
    'Si vous ne connaissez pas votre numéro de train, veuillez indiquer la ville de provenance de votre dernier train.',
  noResult: 'Aucun résultat',
  travelingFlightNumberToTooltip:
    "En cas d'escale, renseignez le numéro de votre dernier vol. Cela permettra à votre voiturier de suivre votre arrivée.",
  travelingTrainNumberToTooltip:
    "En cas d'escale, renseignez le numéro de votre dernier train. Cela permettra à votre voiturier de suivre votre arrivée.",
  returnFlightCompanyTooltip:
    "En cas d'escale, indiquez la compagnie aérienne de votre dernier vol.",
  returnFlightAirportOriginTooltip:
    "En cas d'escale, indiquez la ville où vous prendrez votre dernier avion.",
  returnFlightStationOriginTooltip:
    "En cas d'escale, indiquez la ville où vous prendrez votre dernier train.",
};

import PropTypes from 'prop-types';

export const TextsType = PropTypes.shape({
  startPlaceholder: PropTypes.string,
  endPlaceholder: PropTypes.string,
  timePlaceholder: PropTypes.string,
  fromTimeTitle: PropTypes.string,
  fromTimeFirstDescription: PropTypes.string,
  fromTimeSecondDescription: PropTypes.string,
  toTimeTitle: PropTypes.string,
  toTimeFirstDescription: PropTypes.string,
  toTimeSecondDescription: PropTypes.string,
});

export const DefaultTexts = {
  startPlaceholder: 'Départ',
  endPlaceholder: 'Retour',
  timePlaceholder: 'Heure',
  fromTimeTitle: 'Départ',
  fromTimeFirstDescription: 'Heure d\'arrivée',
  fromTimeSecondDescription: 'de votre avion',
  toTimeTitle: 'Retour',
  toTimeFirstDescription: 'Heure d\'arrivée',
  toTimeSecondDescription: 'au dépose minute',
};
